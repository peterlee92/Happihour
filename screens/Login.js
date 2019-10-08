import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../styles/LoginStyles';
import LoginForm from '../comps/LoginForm';

// Actions is a function that links between pages through keys in Route.js
import {Actions} from 'react-native-router-flux';

function Login() {

    return(
        <ImageBackground 
            style={styles.background}
            source={require('../imgs/bg2.png')}
        >
            <View style={styles.happihourContainer}>
                <Text style={styles.happihour}>Happihour</Text>
            </View>
            <LoginForm />
            <View style={styles.rowsContainer}>
                <Text style={styles.row1}>REMEMBER ME</Text>
                <Text style={styles.row1}>FORGOT PASSWORD?</Text>
            </View>
            <View style={styles.rowsContainer}>
                <Text style={styles.row2}>DON'T HAVE AN ACCOUNT?</Text>
            </View>
            <View style={styles.rowsContainer}>
                <TouchableOpacity
                    //register is a key name in Route.js
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

export default Login;