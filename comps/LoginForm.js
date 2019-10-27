import React,{useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Text, AsyncStorage, KeyboardAvoidingView} from 'react-native';

import styles from '../styles/CompStyles/LoginFormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {Actions} from 'react-native-router-flux';

function LoginForm(){

    const [userName, SetUserName] = useState('');
    const [userPassword, SetUserPassword] = useState('');

    // useEffect(()=>{
    //     _loadInitialState().done()
    // });

    // _loadInitialState = async ()=> {
    //     var value = await AsyncStorage.getItem('user');
    //         if(value !== null){
    //             Actions.detail()
    //         }
    // } 

    // login = () => {

    //     fetch('http://142.232.154.244:3000/users', {
    //         method : 'POST',
    //         headers:{
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             username: userName,
    //             password: userPassword,
    //         })
    //     })

    //     .then((response) => response.json())
    //     .then((res)=>{

    //         if(res.success === true){
    //             AsyncStorage.setItem('user', res.user);
    //             Actions.detail();
    //         }

    //         else{
    //             alert(res.message);
    //         }
    //     })
    //     .done();
    // }


    return(
        <KeyboardAvoidingView 
            style={styles.wrapcontainer}
            behavior="height"
        >
            <View style={{marginBottom:70}}>
            <View style={styles.inputContainer}>
            <FontAwesomeIcon icon="user" size={28} color={"white"} style={styles.inputIcon} />
            <TextInput
                style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                placeholder="Username"
                onChangeText={(username)=>{SetUserName(username)}}
                underlineColorAndroid = "transparent"
                placeholderTextColor="rgba(255,255,255,0.4)"
            />
            </View>
            <View style={styles.inputContainer}>
            <FontAwesomeIcon icon="lock" size={28} color={"#f4e664"} style={styles.inputIcon} />
            <TextInput
                style={[styles.input,{borderBottomColor:"#f4e664"}]}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(userpassword)=>{SetUserPassword(userpassword)}}
                underlineColorAndroid = "transparent"
                placeholderTextColor="#f4e664"
            />
            </View>
            </View>
            
            <View style={styles.loginButContainer}>
                <TouchableOpacity 
                    style={styles.loginBut}
                    // onPress={()=>{login()}}
                >
                    <Text style={styles.loginTxt}>LOG IN</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginForm;