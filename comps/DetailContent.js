import React,{useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/CompStyles/DetailContentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

function DetailContent(){

    const [foodmenu, Setfoodmenu] = useState([]);
    const [drinkmenu, Setdrinkmenu] = useState([]);
    const [rest_loc, Setrest_loc] = useState({lat:0,lng:0});

    var GetMenu=async()=>{
                                        //use ip address
        let drinkresponse = await fetch('http://142.232.152.245/Happihour/Drink.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                rest_name:"Colony"
            })
        })
        
        //data echoed out in php
        let drinkdata = await drinkresponse.json();

        Setdrinkmenu(drinkdata);

                                        //use ip address
        let foodresponse = await fetch('http://142.232.152.245/Happihour/Food.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                rest_name:"Cactus Club"
            })
        })
        
        //data echoed out in php
        let fooddata = await foodresponse.json();

        Setfoodmenu(fooddata);

        Geocoder.init("AIzaSyDLsWDIFV96c4Btw9ohzcDiZX7MzTDnmMw");
        Geocoder.from(fooddata[0].address)
                .then(json => {
                    var location = json.results[0].geometry.location;
                    Setrest_loc(location);
                })
                .catch(error => console.log(error));
       
    
        
    }

    useEffect(()=>{
        GetMenu();
    },[])

    return(
        <View style={{flex:5}}>
            <View style={styles.menuContainer}>
                <Text style={styles.menu}>DRINKS</Text>
                
                {
                    drinkmenu.map((obj,i)=>{
                        return (
                            <View style={styles.txtContainer}>
                                <Text style={styles.txt}>{obj.name}</Text>
                                <Text style={styles.price}>{obj.price}</Text>     
                            </View>
                        )
                    })
                }
                    
                
            </View>
            <View style={styles.menuContainer}>
                <Text style={styles.menu}>FOOD</Text>
                {
                    foodmenu.map((obj,i)=>{
                        return(
                            <View style={styles.txtContainer}>
                                <Text style={styles.txt}>{obj.name}</Text>
                                <Text style={styles.price}>{obj.price}</Text>     
                            </View>
                        )
                    })
                }
                    
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttons}>
                    <FontAwesomeIcon icon='desktop' size={23} style={{marginRight:10}}/>
                    <Text>VISIT WEBSITE</Text>
                </View>
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
                    image={require('../icons/marker.png')}
                />
            </MapView>
        </View>
    )
}

export default DetailContent;