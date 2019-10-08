import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/RegisterFormStyles';

// Actions is a function that links between pages through keys in Route.js
import {Actions} from 'react-native-router-flux';

function RegisterForm(){
    return(
        <View>
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
                    //login is a key name in Route.js
                    onPress={()=> {Actions.login()}}
                >
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterForm;