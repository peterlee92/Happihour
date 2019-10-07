import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../styles/LoginFormStyles';

import {Actions} from 'react-native-router-flux';

function LoginForm() {

    return(
        <ImageBackground 
            style={styles.background}
            source={require('../imgs/bg2.png')}
        >
            <View style={styles.happihourContainer}>
                <Text style={styles.happihour}>Happihour</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />
            <View style={styles.loginContainer}>
                <TouchableOpacity 
                style={styles.login}
                >
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rowsContainer}>
                <Text style={styles.row1}>REMEMBER ME</Text>
                <Text style={styles.row1}>FORGOT PASSWORD?</Text>
            </View>
            <View style={styles.rowsContainer}>
                <Text style={styles.row2}>DON'T HAVE AN ACCOUNT?</Text>
            </View>
            <View style={styles.rowsContainer}>
                <TouchableOpacity
                    onPress={()=>{Actions.register()}}
                >
                    <Text 
                        style={styles.row3}
                    >
                        SIGN UP HERE
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default LoginForm;