import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import styles from '../styles/RegisterFormStyles';

import {Actions} from 'react-native-router-flux';

function RegisterForm(){
    const [username, Setusername] = useState('');
    const [useremail, Setuseremail] = useState('');
    const [userpassword, Setuserpassword] = useState('');
    const [confirmpassword, Setconfirmpassword] = useState('');

    // if(userpassword === confirmpassword){

    // }


    return(
        <View>
            <TextInput 
                placeholder="Username"
                style={styles.input}
                onChangeText={(value)=>{Setusername(value)}}
            />
            <TextInput 
                placeholder="Email"
                style={styles.input}
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize ="none"
                autoCorrect={false}
                onChangeText={(value)=>{Setuseremail(value)}}
            />
            <TextInput 
                placeholder="Password"
                style={styles.input}
                returnKeyType="next"
                secureTextEntry
                onChangeText={(value)=>{Setuserpassword(value)}}
            />
            <TextInput 
                placeholder="Confirm Password"
                style={styles.input}
                secureTextEntry
                onChangeText={(value)=>{Setconfirmpassword(value)}}
            />

            <View style={styles.signupContainer}>
                <TouchableOpacity
                    style={styles.signup}
                    onPress={()=> {
                        Actions.login()
                    }}
                >
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterForm;