import React,{useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Text, AsyncStorage, KeyboardAvoidingView, Alert} from 'react-native';
import styles from '../styles/CompStyles/LoginFormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import localdata from '../localstorage.json';

function LoginForm(props){
 
    const [username, Setusername] = useState('');
    const [userpassword, Setuserpassword] = useState('');
    const [loca, setloca]  = useState([]);

    function setInfo(){
        AsyncStorage.setItem("userinfo", JSON.stringify(localdata));
        console.log(localdata);
    }

    async function StoreInfo(id, name){
        var data = await AsyncStorage.getItem("userinfo");
        console.log("get Item",data)
        data = JSON.parse(data)
        data.info.push({
            user_id:id,
            user_name:name
        })
        AsyncStorage.setItem("userinfo", JSON.stringify(data))
        console.log("async set item",data);
        console.log(await AsyncStorage.getItem("userinfo"));
    }

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
            let response = await fetch('http://142.232.63.126/Happihour/Login.php',{
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

            if(data == 'Your information is incorrect'){
                Alert.alert(data);
            }else {
                StoreInfo(data['Id'], data['username'])
                Alert.alert('welcome!');
                Actions.mappage();

            }

            }
    }

    

    
    useEffect(()=>{
        setInfo();
    },[]);

    return(
        <View>
        <KeyboardAvoidingView
            contentContainerStyle={[styles.wrapcontainer]}
            behavior="padding"
            enabled
            keyboardVerticalOffset={1}
        >
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

            <View style={[styles.inputContainer,]}>
                <TouchableOpacity
                onPress={()=>{Actions.forgotPassword()}}
                >
                <Text style={styles.forgottxt}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>                         
        </KeyboardAvoidingView>
            <View style={styles.loginButContainer}>
                <TouchableOpacity 
                    style={styles.loginBut}
                    onPress={()=>{CheckUserInfo()}}
                >                        
 
                    <Text style={styles.loginTxt}>Log In</Text>

                </TouchableOpacity>
            </View>             
        </View>

    )
}

export default LoginForm;