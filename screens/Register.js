import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, TouchableOpacity}  from 'react-native';
import styles from '../styles/RegisterStyles';
import RegisterForm from '../comps/RegisterForm';

import {Actions} from 'react-native-router-flux';

function Register(){
    return(
        <ImageBackground
            source={require('../imgs/bg2.png')}
            style={styles.background}
        >
            <RegisterForm />
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