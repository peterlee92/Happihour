import React,{useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Text, AsyncStorage} from 'react-native';

import styles from '../styles/LoginFormStyles';

import {Actions} from 'react-native-router-flux';

function LoginForm(){

    // const [userName, SetUserName] = useState('');
    // const [userPassword, SetUserPassword] = useState('');

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
        <View>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(username)=>{SetUserName(username)}}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(userpassword)=>{SetUserPassword(userpassword)}}
            />
            <View style={styles.loginContainer}>
                <TouchableOpacity 
                    style={styles.login}
                    // onPress={()=>{login()}}
                >
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginForm;