import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../styles/CompStyles/RegisterFormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function RegisterForm(){

    const [username, Setusername] = useState();
    const [useremail, Setuseremail] = useState();
    const [userpassword, Setuserpassword] = useState();
    const [confirmpassword, Setconfirmpassword] = useState();

   
    // InsertDataToServer = () =>{
    //     if(username = ""){
            
    //     }
    //     fetch('http://142.232.149.175/Happihour/Register.php',{
    //          method:'POST',
    //          headers:{
    //             'Accept': 'application/json',
    //              'Content-Type': 'application/json'
    //          },
    //          body: JSON.stringify({
    //              username: username,
    //              email: useremail,
    //              password: userpassword,
    //              checkpassword: confirmpassword
    //          })
    //     }).then((response) => response.json())
    //     .then((responseJson)=>{
    //          // Showing response message coming from server after inserting records.
    //         Alert.alert(responseJson);
    //     }).catch((error) => {
    //         console.error(error);
    //     })
    // }
  
    

    return(
        <View style={styles.wrapContainer}>
            <View style={styles.barTxtContainer}>
                <CheckBox
                    title='Are you a bar or restaurant?'
                    center
                    iconRight
                    containerStyle={{backgroundColor:'transparent', borderWidth:0}}
                    checked={true}
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesomeIcon icon="user" size={28} color={"white"} style={styles.inputIcon} />
                <TextInput 
                    placeholder="Username"
                    style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    onChangeText = {(text)=>{Setusername(text)}}

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
                    onChangeText = {(text)=>{Setuseremail(text)}}
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
                    onChangeText = {(text)=>{Setuserpassword(text)}}
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
                    onChangeText = {(text)=>{Setconfirmpassword(text)}}
                />
           </View>

            <View style={styles.signupContainer}>
                <TouchableOpacity
                    style={styles.signupBut}
                    onPress={()=>{}}
                >
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterForm;