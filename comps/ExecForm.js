import React, { useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

var location = "";
var name = "";
var contact = "";
var address = "";
var url = "";


function ExecForm(){
    var phColor = "white";

    const [info, setInfo] = useState([]);

    const CreateInfo = async()=>{
        var obj = {
            key:"info_create",
            data:{
                location:location,
                name:name,
                contact:contact,
                address:address,
                url:url
            }
        }
        var data = await axios.post("http://192.168.0.12/happihour/execInfo.php",obj);
        await ReadInfo();
    }

    const ReadInfo = async()=>{
        var obj = {
            key:"info_read",
            data:{}
        }
        var data = await axios.post("http://192.168.0.12/happihour/execInfo.php",obj);

        var dbres = JSON.parse(data);
        setInfo(dbres);
    }

    useEffect(()=>{
        ReadInfo();
    }, []);

    return(
            <View
            style={styles.container}
            >
                <Text style={styles.heading4}>EXECUTIVE MODE</Text>
                <Text style={styles.subtitle}>
                    ENTER YOUR BAR OR RESTAURANT INFORMATION BELOW
                </Text>
                <View style={styles.infoForm}>
                    <TextInput
                        style={styles.input}
                        placeholder="Company Name"
                        placeholderTextColor={phColor}                    
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        placeholderTextColor={phColor}                    
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contact Number"
                        placeholderTextColor={phColor}                    
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Website URL"
                        placeholderTextColor={phColor}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Location: (ex:Kitsilano)"
                        placeholderTextColor={phColor}                    
                    />                    
                </View>

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
