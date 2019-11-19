import React,{useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Linking  } from 'react-native';
import styles from '../styles/CompStyles/DetailContentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

function DetailContent(props){

    const [foodmenu, Setfoodmenu] = useState([]);
    const [drinkmenu, Setdrinkmenu] = useState([]);
    const [rest_loc, Setrest_loc] = useState({lat:0,lng:0});
    const [rest_url, Setrest_url] = useState()

    var drinklist = [];
    var foodlist = [];

    var GetMenu=async()=>{
    
                                        //use ip address
        let drinkresponse = await fetch('http://142.232.146.164/Happihour/Drink.php',{
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

        Geocoder.init("AIzaSyDLsWDIFV96c4Btw9ohzcDiZX7MzTDnmMw");
        Geocoder.from(drinkdata[0].address)
                .then(json => {
                    var location = json.results[0].geometry.location;
                    if(location !== ''){
                        Setrest_loc(location);
                    }
                    
                })
                .catch(error => console.log(error));

                                        //use ip address
        let foodresponse = await fetch('http://142.232.146.164/Happihour/Food.php',{
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

        Geocoder.init("AIzaSyDLsWDIFV96c4Btw9ohzcDiZX7MzTDnmMw");
        Geocoder.from(fooddata[0].address)
                .then(json => {
                    var location = json.results[0].geometry.location;
                    if(location !== ''){
                        Setrest_loc(location);
                    }
                })
                .catch(error => console.log(error));



                
                
    }
    console.log(drinkmenu.length)
    if(drinkmenu.length !== 0){
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
        drinklist = null;
    }

    if(foodmenu.legnth !== 0){
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
        foodlist = null;
    }

    //to grab the restaurant url
    var GrabUrl=async()=>{
        let Urlresponse = await fetch('http://142.232.146.164/Happihour/Url.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id:'1',
                restaurantname:props.text
            })
        })

        let urldata = await Urlresponse.json();
        Setrest_url(urldata[0].url)
    }

    //direct to url
    // var GotoUrl=()=>{
    //     Linking.canOpenURL("'"+rest_url+"'").then(supported => {
    //         if(supported){
    //             Linking.openURL("'"+rest_url+"'");
    //         }else{
    //             console.log("Don't know how to open URL")
    //         }
    //     })
    // }

    useEffect(()=>{
        GetMenu();
        GrabUrl();

    },[])

    return(
        <View style={{flex:5}}>
    
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
                    style={styles.buttons}
                    onPress={()=>{Linking.openURL('https://google.com')}}
                >
                    <FontAwesomeIcon icon='desktop' size={23} style={{marginRight:10}}/>
                    <Text>VISIT WEBSITE</Text>
                </TouchableOpacity>
                <View style={styles.buttons}>
                    <FontAwesomeIcon icon='phone-alt' size={20} style={{marginRight:10}}/>
                    <Text>778-123-4567</Text>
                </View>
            </View>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude:rest_loc.lat,
                    longitude:rest_loc.lng,
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
                        latitude:rest_loc.lat,
                        longitude:rest_loc.lng,
                    }}
                    image={require('../imgs/pin.png')}
                />
            </MapView>
        </View>
    )
}

export default DetailContent;