import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from '../styles/LoginFormStyles';

function LoginForm(){
    return(
        <View>
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
        </View>
    )
}

export default LoginForm;