import React, { useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';


function ExecForm(){
    var phColor = "white";
    var selectColor = "red";

   const [restInfo, setRestInfo] = useState([]);

   var GetInfo = async()=>{
       let infoResponse = await fetch('http://142.232.49.63/Happihour/execInfo.php',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            rest_name:1
            //rest_name:restaurant_name
        })
       })
       let restData =  await infoResponse.json();
       setRestInfo(restData);

   }

   useEffect(()=>{
       GetInfo();
   },[]);


    return(
            <View
            style={styles.container}
            >
                <Text style={styles.heading4}>EXECUTIVE MODE</Text>
                <Text style={styles.subtitle}>
                    ENTER YOUR BAR OR RESTAURANT INFORMATION BELOW
                </Text>
                {
                    restInfo.map((obj,i)=>{
                        return(
                            <View style={styles.infoForm}>
                    <TextInput
                        style={styles.input}
                        placeholder="Company Name"
                        placeholderTextColor={phColor}  
                        value={obj.name}      
                        selectionColor="#FFD96F"
                        underlineColorAndroid="#FFD96F"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        placeholderTextColor={phColor}                    
                        value={obj.address} 
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contact Number"
                        placeholderTextColor={phColor}                    
                        value={obj.contact} 
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Website URL"
                        placeholderTextColor={phColor}
                        value={obj.url} 
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Location: (ex:Kitsilano)"
                        placeholderTextColor={phColor} 
                        value={obj.location}                    
                    />                    
                </View>
                        )
                    })
                }

                <View
                style={btnStyles.btnCont}
                >
                    <TouchableOpacity
                        style={btnStyles.solidBtn}
                        onPress={()=>{Actions.execInfo()}}
                    >
                        <Text style={btnStyles.nextText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default ExecForm;
