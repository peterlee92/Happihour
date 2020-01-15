import React,{useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity, PermissionsAndroid, Alert} from 'react-native';
import styles from '../styles/CompStyles/TimePopupStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Geolocation from '@react-native-community/geolocation';



function TimePopup(props){

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

    var TimeFilter=async(time)=>{
        let timeresponse = await fetch('https://DLTFilter.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                C_day:props.Dayvalue,
                C_time:time,
                C_location:props.Locationvalue
            })
        })
 
        let timedata = await timeresponse.json()
        console.log(timedata)

        if(timedata == "wrong"){
            getLoc();
            props.setFoption('D');
        }else{
            props.setDLTfilter(timedata);
            props.setFoption('D');
        }

   
    }

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.titlewrap}>
                        <FontAwesomeIcon icon="clock" color={"#f4e664"} size={24} style={{position:'absolute', left:10}}/>
                        <Text style={styles.title}>SELECT A TIME</Text>
                        <TouchableOpacity 
                            style={{position:'absolute', right:10}}
                            onPress={()=>{
                                props.setTimepop(false)
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
                                TimeFilter('10:00')
                                props.setTimevalue('10:00')   
                                props.setTimetxt('10:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('11:00')
                                props.setTimevalue('11:00')   
                                props.setTimetxt('11:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>11:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('12:00')
                                props.setTimevalue('12:00')   
                                props.setTimetxt('12:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>12:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('13:00')
                                props.setTimevalue('13:00')   
                                props.setTimetxt('13:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>1:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('14:00')
                                props.setTimevalue('14:00')   
                                props.setTimetxt('14:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>2:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('15:00')
                                props.setTimevalue('15:00')   
                                props.setTimetxt('15:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>3:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('16:00')
                                props.setTimevalue('16:00')   
                                props.setTimetxt('16:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>4:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('17:00')
                                props.setTimevalue('17:00')   
                                props.setTimetxt('17:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>5:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('18:00')
                                props.setTimevalue('18:00')   
                                props.setTimetxt('18:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>6:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('19:00')
                                props.setTimevalue('19:00')   
                                props.setTimetxt('19:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>7:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('20:00')
                                props.setTimevalue('20:00')   
                                props.setTimetxt('20:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>8:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('21:00')
                                props.setTimevalue('21:00')   
                                props.setTimetxt('21:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>9:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('22:00')
                                props.setTimevalue('22:00')   
                                props.setTimetxt('22:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>10:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('23:00')
                                props.setTimevalue('23:00')   
                                props.setTimetxt('23:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>11:00 PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('00:00')
                                props.setTimevalue('00:00')   
                                props.setTimetxt('00:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>12:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('01:00')
                                props.setTimevalue('01:00')   
                                props.setTimetxt('01:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>1:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                TimeFilter('02:00')
                                props.setTimevalue('02:00')   
                                props.setTimetxt('02:00')   
                                props.setTimepop(false)                    
                            }}
                            style={styles.timewrap}
                        >
                        <Text style={styles.time}>2:00 AM</Text>
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

export default TimePopup;