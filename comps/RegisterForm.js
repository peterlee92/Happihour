import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/RegisterFormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function RegisterForm(){
    return(
        <View style={styles.wrapContainer}>
            <View style={styles.barTxtContainer}>
                <Text style={styles.barTxt}>Are you a bar or restaurant?</Text>
            </View>
            <View style={styles.inputContainer}>
                <FontAwesomeIcon icon="user" size={28} color={"white"} style={styles.inputIcon} />
                <TextInput 
                    placeholder="Username"
                    style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor="rgba(255,255,255,0.4)"

                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesomeIcon icon="envelope" size={28} color={"white"} style={styles.inputIcon} />
                <TextInput 
                    placeholder="Email"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize ="none"
                    autoCorrect={false}
                    style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor="rgba(255,255,255,0.4)"
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesomeIcon icon="lock" size={28} color={"white"} style={styles.inputIcon} />
                <TextInput 
                    placeholder="Password"
                    returnKeyType="next"
                    secureTextEntry
                    style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor="rgba(255,255,255,0.4)"
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesomeIcon icon="lock" size={28} color={"#f4e664"} style={styles.inputIcon} />
                <TextInput 
                    placeholder="Confirm Password"
                    secureTextEntry
                    style={[styles.input,{borderBottomColor:"#f4e664"}]}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor="#f4e664"
                />
           </View>

            <View style={styles.signupContainer}>
                <TouchableOpacity
                    style={styles.signupBut}
                    onPress={()=> {}}
                >
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterForm;