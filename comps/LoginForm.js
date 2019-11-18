import React,{useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Text, AsyncStorage, KeyboardAvoidingView, Alert} from 'react-native';
import styles from '../styles/CompStyles/LoginFormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import localdata from '../localstorage.json';

function LoginForm(){

    const [username, Setusername] = useState('');
    const [userpassword, Setuserpassword] = useState('');
    const [loca, setloca]  = useState([]);

    var CheckUserInfo=async()=>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        if(username == ''){
            Alert.alert('Please enter your username');
        }else if(reg.test(username)){
            Alert.alert('Username is not correct');
        }else if(userpassword == ''){
            Alert.alert('Please enter your password');
        }else{ 

                                        //use ip address
            let response = await fetch('http://192.168.0.20/Happihour/Login.php',{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: userpassword
                })
            })

            // data echoed out in php
            let data = await response.json()

            if(data == 'ok'){
                Alert.alert('welcome!');
                Actions.mappage()
            }else {
                Alert.alert(data);
            }

            }
    }
  

    return(
        <View 
            style={styles.wrapcontainer}
            behavior="height"
        >
            <View style={{marginBottom:30}}>
            <View style={styles.inputContainer}>
            <FontAwesomeIcon icon="user" size={22} color={"white"} style={styles.inputIcon} />
            <TextInput
                style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                placeholder="Username"
                onChangeText={(text)=>{Setusername(text)}}
                underlineColorAndroid = "transparent"
                placeholderTextColor="#f4e664"
            />
            </View>
            <View style={styles.inputContainer}>
            <FontAwesomeIcon icon="lock" size={22} color={"white"} style={styles.inputIcon} />
            <TextInput
                style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text)=>{Setuserpassword(text)}}
                underlineColorAndroid = "transparent"
                placeholderTextColor="#f4e664"
            />
             
            </View>
            <View style={styles.inputContainer}>
            <TouchableOpacity
                    onPress={()=>{Actions.forgotPassword()}}
                >
                    <Text style={styles.forgottxt}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
             
            </View>
            
            <View style={styles.loginButContainer}>
                <TouchableOpacity 
                    style={styles.loginBut}
                    onPress={()=>{CheckUserInfo()}}
                >

                    
                    <Text style={styles.loginTxt}>LOG IN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginForm;