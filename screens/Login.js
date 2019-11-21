import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import styles from '../styles/ScreenStyles/LoginStyles';
import LoginForm from '../comps/LoginForm';
import {Actions} from 'react-native-router-flux';


function Login(props) {
     
    var refPass = props.pass;

    return(
        <KeyboardAvoidingView
        style={{flex:1}}
        behavior="height">
            <ImageBackground 
                style={styles.background}
                source={require('../imgs/bg2.png')}
            >
                <Image 
                    style={styles.header}
                    source={require('../imgs/Flow_Header.png')}
                />
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../imgs/Happihour_Logo.png')}
                    />
                </View>
                <LoginForm 
                refPass
                refForgot
                />
                <View style={styles.newaccountContainer}>
                    <Text style={styles.dontTxt}>Don't have an account? Click here to</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            Actions.register()
                        }}
                    >
                        <Text style={styles.createTxt}>
                            create a new account
                        </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={()=>{Actions.forgotPassword()}}
                    >
                        <Text style={styles.forgottxt}>Forgot Password?</Text>
                    </TouchableOpacity> */}
                </View>
            </ImageBackground>

        </KeyboardAvoidingView>        
    )
}

export default Login;