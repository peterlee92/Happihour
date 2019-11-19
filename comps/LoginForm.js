import React,{useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Text, AsyncStorage, KeyboardAvoidingView, Alert} from 'react-native';
import styles from '../styles/CompStyles/LoginFormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import Geocoder from 'react-native-geocoding';

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
            let response = await fetch('http://142.232.154.132/Happihour/Login.php',{
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
    
    var yo=()=>{
        Geocoder.init("AIzaSyDLsWDIFV96c4Btw9ohzcDiZX7MzTDnmMw");
        Geocoder.from('3700 Willingdon Ave Vancouver')
            .then(json => {
                var location = json.results[0].geometry.location;
                set

            })
            .catch(error => console.log(error));
    }
    


    

    return(
        <KeyboardAvoidingView 
            style={/**styles.wrapcontainer*/{flex:1,marginBottom:30}}
            behavior="padding"
            enabled
        >
            <View style={{/**marginBottom:30*/}}>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon="user" size={22} color={"white"} style={styles.inputIcon} />
                    <TextInput
                        style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                        placeholder="Username"
                        onChangeText={(text)=>{Setusername(text)}}
                        underlineColorAndroid = "transparent"
                        placeholderTextColor="#f4e664"
                        blurOnSubmit={false}                        
                        returnKeyType={"next"}                    
                        onSubmitEditing = {()=> refPass.focus()}
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
                        blurOnSubmit={false}
                        returnKeyType={"done"} 
                        ref={(i)=>{refPass = i}}
                        onSubmitEditing = {()=>{CheckUserInfo()}}
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
        </KeyboardAvoidingView>
    )
}

export default LoginForm;