import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, TouchableOpacity, Image, KeyboardAvoidingView}  from 'react-native';
import styles from '../styles/ScreenStyles/RegisterStyles';
import RegisterForm from '../comps/RegisterForm';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';


function Register(props){

    var refEmail = props.email;
    var refAdd = props.address;
    var refPass = props.pass;
    var refConfPass = props.confPass;

    return(
        <KeyboardAvoidingView
          style={{flex:1}}>
            <ImageBackground
                source={require('../imgs/bg2.png')}
                style={styles.background}
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
                <RegisterForm 
                refEmail
                refAdd
                refPass
                refConfPass/>
                <TouchableOpacity 
                    style={styles.backBut}
                    onPress={()=>{Actions.login()}}
                >
                    <FontAwesomeIcon icon="chevron-left" size={17} marginTop={-3} color={"black"}  />
                </TouchableOpacity>

            </ImageBackground>            
        </KeyboardAvoidingView>

    )
}

export default Register;