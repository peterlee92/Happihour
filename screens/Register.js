import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, TouchableOpacity}  from 'react-native';
import styles from '../styles/RegisterStyles';

import {Actions} from 'react-native-router-flux';

function Register(){
    return(
        <ImageBackground
            source={require('../imgs/bg2.png')}
            style={styles.background}
        >
            <TextInput 
                placeholder="Username"
                style={styles.input}

            />
            <TextInput 
                placeholder="Email"
                style={styles.input}
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize ="none"
                autoCorrect={false}
            />
            <TextInput 
                placeholder="Password"
                style={styles.input}
                returnKeyType="next"
                secureTextEntry
            />
            <TextInput 
                placeholder="Confirm Password"
                style={styles.input}
                secureTextEntry
            />

            <View style={styles.signupContainer}>
                <TouchableOpacity
                    style={styles.signup}
                    onPress={()=> {Actions.login()}}
                >
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={()=>{Actions.login()}}
            >
            <View style={styles.returnContainer}>
                <Text style={styles.returnText}>RETURN TO LOGIN</Text>
            </View>
            </TouchableOpacity>

        </ImageBackground>
    )
}

export default Register;