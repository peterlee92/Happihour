import React, { useState } from 'react';
import {View, TextInput, TouchableOpacity, Text, Picker,Button} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import TimePicker from 'react-native-simple-time-picker';

import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

function ExecHour(){
    

    var days = ['M','T','W','R','F','S','S'];
    const renderDays = () => {
    const views = [];
    for ( var i =0; i<7; i++){
     views.push(
            <TouchableOpacity
                style={btnStyles.roundBtn}
                key={i}
            >
                <Text>{days[i]}</Text>
            </TouchableOpacity>
     );}
    return views;
    }


    return(
        <View style={styles.container}>
            <Text style={[styles.heading4,{letterSpacing:5, flex:.2}]}>HAPPY HOURS</Text>
            <View
            style={[{borderWidth:2, borderColor:"white", padding:10, backgroundColor:"#081C23",}]}
            >
                <Text style={styles.overline}>SUBMIT YOUR HAPPY HOUR DAYS AND TIME</Text>
                <View style={styles.day}>
                    {renderDays()}
                </View>
                <View>
                    <Text style={styles.overline}>START TIME</Text>
                    { /*Add Time Picker*/ }
                    <TouchableOpacity
                        style={btnStyles.timeBtn}
                    >
                        <Text style={btnStyles.timeText}>18:00</Text>                        
                    <FontAwesomeIcon icon="caret-down" transform="shrink-5"  size={30}/>
                </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.overline}>END TIME</Text>
                    { /*Add Time Picker*/ }
                    <TouchableOpacity
                        style={btnStyles.timeBtn}
                    >
                        <Text style={btnStyles.timeText}>11:00</Text>                        
                    <FontAwesomeIcon icon="caret-down" transform="shrink-5"  size={30}/>
                </TouchableOpacity>                    
                </View>   
            </View>
                     <TouchableOpacity
                        onPress={()=> setScreen(execPhoto)}
                    >
                    <FontAwesomeIcon icon="plus" transform="shrink-5"  size={50} style={btnStyles.addHour}/>
                </TouchableOpacity>
                <View style={[{flex:.1}]}>
                    <TouchableOpacity
                        style={btnStyles.yellowBtn}
                            onPress={()=> setScreen(execPhoto)}
                        >
                        <Text style={btnStyles.btnText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default ExecHour;
