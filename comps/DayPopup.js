import React,{useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/DayPopupStyles';
import Geocoder from 'react-native-geocoding';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


function DayPopup(props){

    var DayFilter=async(day)=>{
        let dayresponse = await fetch('http://Happihour-env.punbp2gfmb.us-east-2.elasticbeanstalk.com/DLTFilter.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                C_day:day,
                C_time:props.Timevalue,
                C_location:props.Locationvalue
            })
        })
  
        let daydata = await dayresponse.json()
        console.log(daydata)

        if(daydata == "wrong"){
            props.setDLTfilter([]);
        }else{
            props.setDLTfilter(daydata);
            props.setSfilter([]);
        }

   
    }

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.titlewrap}>
                        <FontAwesomeIcon icon="calendar-day" color={"#f4e664"} size={24} style={{position:'absolute', left:10}}/>
                        <Text style={styles.title}>SELECT A DAY</Text>
                        <TouchableOpacity 
                            style={{position:'absolute', right:10}}
                            onPress={()=>{
                                props.setDaypop(false)
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
                                DayFilter('mon')
                                props.setDayvalue('mon')   
                                props.setDaytxt('Monday')   
                                props.setDaypop(false)                    
                            }}
                            style={styles.daywrap}
                        >
                        <Text style={styles.day}>Monday</Text>
                        </TouchableOpacity>                       
                        
                        <TouchableOpacity
                            onPress={()=>{
                                DayFilter('tue')
                                props.setDayvalue('tue')   
                                props.setDaytxt('Tuesday')   
                                props.setDaypop(false)                    
                            }}
                            style={styles.daywrap}
                        >
                        <Text style={styles.day}>Tuesday</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            onPress={()=>{
                                DayFilter('wed')
                                props.setDayvalue('wed')   
                                props.setDaytxt('Wednesday')   
                                props.setDaypop(false)                    
                            }}
                            style={styles.daywrap}
                        >
                        <Text style={styles.day}>Wednesday</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>{
                                DayFilter('thur')
                                props.setDayvalue('thur')   
                                props.setDaytxt('Thursday')   
                                props.setDaypop(false)                    
                            }}
                            style={styles.daywrap}
                        >
                        <Text style={styles.day}>Thursday</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>{
                                DayFilter('fri')
                                props.setDayvalue('fri')   
                                props.setDaytxt('Friday')   
                                props.setDaypop(false)                    
                            }}
                            style={styles.daywrap}
                        >
                        <Text style={styles.day}>Friday</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>{
                                DayFilter('sat')
                                props.setDayvalue('sat')   
                                props.setDaytxt('Saturday')   
                                props.setDaypop(false)                    
                            }}
                            style={styles.daywrap}
                        >
                        <Text style={styles.day}>Saturday</Text>
                        </TouchableOpacity> 

                        <TouchableOpacity
                            onPress={()=>{
                                DayFilter('sun')
                                props.setDayvalue('sun')   
                                props.setDaytxt('Sunday')   
                                props.setDaypop(false)                    
                            }}
                            style={styles.daywrap}
                        >
                        <Text style={styles.day}>Sunday</Text>
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

export default DayPopup;