import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/TimePopupStyles';
import Geocoder from 'react-native-geocoding';

function TimePopup(props){

    var TimeFilter=async()=>{

        var today = new Date();
        var C_day = today.getUTCDay(),
            C_hour = today.getHours(),
            C_minute = today.getMinutes();

        let timeresponse =await fetch('http://142.232.154.132/Happihour/TimeFilter.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                C_day:"Mon",
                C_hour:"16",
                C_minute:"00"
            })
        })

        let timedata = await timeresponse.json()
        props.setR_name(timedata)

        var filters = [];
        
        Geocoder.init("AIzaSyDLsWDIFV96c4Btw9ohzcDiZX7MzTDnmMw");
        for(var i = 0; i<timedata.length; i++){
            var obj = timedata[i];
            var json = await Geocoder.from(obj.address);
            filters.push(json.results[0].geometry.location);
        }

        props.setTfilter(filters); 
    
    }

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <ScrollView style={styles.scroll}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter()   
                                props.setTimepop(false)                    
                            }}
                        >
                        <Text style={styles.time}>12 00 PM</Text>
                        </TouchableOpacity>
                        
                        
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default TimePopup;