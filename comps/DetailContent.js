import React,{useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Linking  } from 'react-native';
import styles from '../styles/CompStyles/DetailContentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

function DetailContent(props){

    const [foodmenu, Setfoodmenu] = useState([]);
    const [drinkmenu, Setdrinkmenu] = useState([]);
    const [rest_lat, Setrest_lat] = useState(0);
    const [rest_long, Setrest_long] = useState(0);
    const [rest_url, Setrest_url] = useState();
    const [rest_num, Setrest_num] = useState();

    var drinklist = [];
    var foodlist = [];

    var GetMenu=async()=>{
    
                                        //use ip address
        let drinkresponse = await fetch('http://142.232.158.151/Happihour/Drink.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                rest_name:props.text
            })
        })
        
        //data echoed out in php
        let drinkdata = await drinkresponse.json();
        Setdrinkmenu(drinkdata);

                                        //use ip address
        let foodresponse = await fetch('http://142.232.158.151/Happihour/Food.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                rest_name:props.text
            })
        })
        
        //data echoed out in php
        let fooddata = await foodresponse.json();

        Setfoodmenu(fooddata);
        console.log(fooddata)

                
    }


    console.log(drinkmenu.length)
    if(drinkmenu !== 'no'){
        for(var i = 0; i < drinkmenu.length; i++){
            var drink = (
                <View 
                    style={styles.txtContainer}
                    key={i}
                >
                    <Text style={styles.txt}>{drinkmenu[i].name}</Text>
                    <Text style={styles.price}>$ {drinkmenu[i].price}</Text>     
                </View>
            )
            drinklist.push(drink);
        } 
    }else {
        drinklist = (
            <Text style={{color:'white'}}>No happy hour menu</Text>
        );
    }

    if(foodmenu !== 'no'){
        for(var i = 0; i < foodmenu.length; i++){
            var food = (
                <View 
                    style={styles.txtContainer}
                    key={i}
                >
                    <Text style={styles.txt}>{foodmenu[i].name}</Text>
                    <Text style={styles.price}>$ {foodmenu[i].price}</Text>     
                </View>
            )
            foodlist.push(food);
        }
    }else {
        foodlist = (
            <Text style={{color:'white'}}>No happy hour menu</Text>
        );
    }

    //to grab the restaurant url
    var Grabinfo=async()=>{
        let response = await fetch('http://142.232.158.151/Happihour/Info.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                restaurantname:props.text
            })
        })

        let data = await response.json();
        console.log(data)
        Setrest_url(data.url)
        Setrest_num(data.contact)
        Setrest_lat(Number(data.latitude))
        Setrest_long(Number(data.longtitude))

    }

    //direct to url
    var GotoUrl=()=>{
        Linking.canOpenURL(rest_url).then(supported => {
            if(supported){
                Linking.openURL(rest_url);
            }else{
                console.log("Don't know how to open URL")
            }
        })
    }


    useEffect(()=>{
        GetMenu();
        Grabinfo();

    },[])

    return(
        <View style={{flex:5}}>
            <View style={{backgroundColor:'#0A191F'}}>
            <View style={styles.menuContainer}>
                <Text style={styles.menu}>DRINKS</Text>

                {drinklist}
                
            </View>
            <View style={styles.menuContainer}>
                <Text style={styles.menu}>FOOD</Text>

                {foodlist}
                    
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.button1}
                    onPress={()=>{GotoUrl()}}
                >
                    <FontAwesomeIcon icon='globe' size={23} style={{marginRight:10}}/>
                    <Text style={{marginLeft:15, fontSize:18}}>WEBSITE</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button2}
                    onPress={()=>{Linking.openURL('tel:'+rest_num)}}
                >
                    <FontAwesomeIcon icon='phone-alt' color='white' size={20} style={{marginRight:10}}/>
                <Text style={{marginLeft:15, fontSize:18, color:'white'}}>{rest_num}</Text>
                </TouchableOpacity>
            </View>
            </View>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude:rest_lat,
                    longitude:rest_long,
                    latitudeDelta: 0.00992,
                    longitudeDelta: 0.00421,
                  }}
                zoomEnabled={true}
                followsUserLocation={true}
                rotateEnabled={true}
                toolbarEnabled={true}
            >
                <Marker
                    coordinate={{
                        latitude:rest_lat,
                        longitude:rest_long,
                    }}
                    image={require('../imgs/pin.png')}
                />
            </MapView>
        </View>
    )
}

export default DetailContent;