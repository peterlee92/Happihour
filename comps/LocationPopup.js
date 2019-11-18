import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/LocationPopupStyles';
import Geocoder from 'react-native-geocoding';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function LocationPopup(props){

    var LocationFilter=async(location)=>{

        let locationresponse = await fetch('http://192.168.0.20/Happihour/DLTFilter.php',{
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

        if(locationdata == "wrong"){
            props.setDLTfilter([]);
        }else{
            Geocoder.init("AIzaSyDLsWDIFV96c4Btw9ohzcDiZX7MzTDnmMw");
            for(var i = 0; i<locationdata.length; i++){
                var obj = locationdata[i];
                var json = await Geocoder.from(obj.address);
                
                obj.location=json.results[0].geometry.location;
            }

            props.setDLTfilter(locationdata);
        }

   
    }

    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={()=>{props.setLocationpop(false)}}
        >
            <View style={styles.wrapper}>
                <View style={styles.titlewrap}>
                    <FontAwesomeIcon icon="map-marker-alt" color={"#f4e664"} size={24} style={{position:'absolute', left:10}}/>
                    <Text style={styles.title}>SELECT A LOCATION</Text>
                    <TouchableOpacity 
                            style={{position:'absolute', right:10}}
                            onPress={()=>{props.setLocationpop(false)}}    
                        >
                        <FontAwesomeIcon icon="times-circle" color={"#f4e664"} size={20} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=>{
                                props.setLocationpop(false)
                                props.setLocationvalue('West-End')
                                LocationFilter('West-End')
                             
                            }}
                            style={styles.locationwrap}
                        >
                        <Text style={styles.location}>West-End</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                props.setLocationpop(false)
                                props.setLocationvalue('East-Van')
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
                                LocationFilter('Kitsilano')
                            
                            }}
                            style={styles.locationwrap}
                        >
                        <Text style={styles.location}>Kitsilano</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.arrowwrap}>
                    <FontAwesomeIcon icon="chevron-down" size={28} color={"#f4e664"} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default LocationPopup;