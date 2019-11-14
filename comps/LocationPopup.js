import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/LocationPopupStyles';
import Geocoder from 'react-native-geocoding';

function LocationPopup(props){

    var LocationFilter=async()=>{

        var today = new Date();
        var C_day = today.getUTCDay(),
            C_hour = today.getHours(),
            C_minute = today.getMinutes();

        let timeresponse =await fetch('http://142.232.154.132/Happihour/LocationFilter.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location:"West-End"
            })
        })

        let locationdata = await timeresponse.json()
        props.setR_name(locationdata)

        var filters = [];
        
        Geocoder.init("AIzaSyDLsWDIFV96c4Btw9ohzcDiZX7MzTDnmMw");
        for(var i = 0; i<locationdata.length; i++){
            var obj = locationdata[i];
            var json = await Geocoder.from(obj.address);
            filters.push(json.results[0].geometry.location);
        }

        props.setLfilter(filters);
   
    }

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <ScrollView style={styles.scroll}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=>{props.setLocationpop(false)
                            LocationFilter()
                            }}
                        >
                        <Text style={styles.location}>West End</Text>
                        </TouchableOpacity>
                        
                        
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default LocationPopup;