import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, PermissionsAndroid, Alert} from 'react-native';
import styles from '../styles/CompStyles/LocationPopupStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Geolocation from '@react-native-community/geolocation';


function LocationPopup(props){

    async function getLoc(){
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation',
                    message:
                        'Get geolocation',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            console.log(granted);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the map');
                Geolocation.getCurrentPosition(
                    position => {
                        props.setDLTfilter([{"latitude":position.coords.latitude, "longtitude":position.coords.longitude}]);
                        Alert.alert('no happihours founded')
                    },
                    error=>{console.log(error)},
                    {enableHighAccuracy:true, timeout:20000, maximumAge:1000}
                )
            } else {
                console.log('geolcation permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    var LocationFilter=async(location)=>{
        console.log(location)
        console.log(props.Dayvalue)
        let locationresponse = await fetch('https://DLTFilter.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                C_day:props.Dayvalue,
                C_time:props.Timevalue,
                C_location:location
            })
        })
 
        let locationdata = await locationresponse.json()
        console.log(locationdata);

        if(locationdata == "wrong"){
            getLoc()
            props.setFoption('D')
        }else{
            console.log('work')
            props.setDLTfilter(locationdata);
            props.setFoption('D')
        }
        
  
    }

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.titlewrap}>
                    <FontAwesomeIcon icon="map-marker-alt" color={"#f4e664"} size={24} style={{position:'absolute', left:10}}/>
                    <Text style={styles.title}>SELECT A LOCATION</Text>
                    <TouchableOpacity 
                            style={{position:'absolute', right:10}}
                            onPress={()=>{
                                props.setLocationpop(false)
                                props.setSearchvalue('')
                            }}    
                        >
                        <FontAwesomeIcon icon="times-circle" color={"#f4e664"} size={20} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=>{
                                LocationFilter('West-End')
                                props.setLocationpop(false)
                                props.setLocationvalue('West-End')
                                props.setLocationtxt('West-End')
                             
                            }}
                            style={styles.locationwrap}
                        >
                        <Text style={styles.location}>West-End</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                props.setLocationpop(false)
                                props.setLocationvalue('East-Van')
                                props.setLocationtxt('East-Van')
                                LocationFilter('East-Van')
                            
                            }}
                            style={styles.locationwrap}
                        >
                        <Text style={styles.location}>East-Van</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                props.setLocationpop(false)
                                props.setLocationvalue('Kitsilano')
                                props.setLocationtxt('Kitsilano')
                                LocationFilter('Kitsilano')
                            
                            }}
                            style={styles.locationwrap}
                        >
                        <Text style={styles.location}>Kitsilano</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                props.setLocationpop(false)
                                props.setLocationvalue('Downtown')
                                props.setLocationtxt('Downtown')
                                LocationFilter('Downtown')
                            
                            }}
                            style={styles.locationwrap}
                        >
                        <Text style={styles.location}>Downtown</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                props.setLocationpop(false)
                                props.setLocationvalue('Yaletown')
                                props.setLocationtxt('Yaletown')
                                LocationFilter('Yaletown')
                            
                            }}
                            style={styles.locationwrap}
                        >
                        <Text style={styles.location}>Yaletown</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                props.setLocationpop(false)
                                props.setLocationvalue('Gastown')
                                props.setLocationtxt('Gastown')
                                LocationFilter('Gastown')
                            
                            }}
                            style={styles.locationwrap}
                        >
                        <Text style={styles.location}>Gastown</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                props.setLocationpop(false)
                                props.setLocationvalue('Chinatown')
                                props.setLocationtxt('Chinatown')
                                LocationFilter('Chinatown')
                            
                            }}
                            style={styles.locationwrap}
                        >
                        <Text style={styles.location}>Chinatown</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                props.setLocationpop(false)
                                props.setLocationvalue('Burnaby')
                                props.setLocationtxt('Burnaby')
                                LocationFilter('Burnaby')
                            
                            }}
                            style={styles.locationwrap}
                        >
                        <Text style={styles.location}>Nearby</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.arrowwrap}>
                    <FontAwesomeIcon icon="chevron-down" size={28} color={"#f4e664"} />
                </View>
            </View>
        </View>
    )
}

export default LocationPopup;