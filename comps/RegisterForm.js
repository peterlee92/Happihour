import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import styles from '../styles/CompStyles/RegisterFormStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Actions } from 'react-native-router-flux';

function RegisterForm(){

    const [username, Setusername] = useState();
    const [useremail, Setuseremail] = useState();
    const [useraddress, Setuseraddress] = useState();
    const [userpassword, Setuserpassword] = useState();
    const [confirmpassword, Setconfirmpassword] = useState();

   
    var InsertDataToServer = () =>{
        // if(username = ""){
            
        // }
        fetch('http://192.168.0.12/Happihour/Register.php',{
             method:'POST',
             headers:{
                'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 username: username,
                 email: useremail,
                 address: useraddress,
                 password: userpassword,
                 checkpassword: confirmpassword
             })
        }).then((response) => response.json())
        .then((responseJson)=>{
             // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
            Actions.login();
        }).catch((error) => {
            console.error(error);
        })
    }
  
    

    return(
        <KeyboardAvoidingView
         style={{flex:1}}
         behavior="padding"
         enabled>
            <View style={styles.wrapContainer}>
                        <View style={styles.barTxtContainer}>
                            <CheckBox textStyle={styles.barTxt}
                                title="Are you a bar or restaurant?"
                                center
                                iconRight
                                containerStyle={{backgroundColor:'transparent', borderWidth:0}}
                                checked={false}
                                checkedIcon='check-square-o'
                                checkedColor = '#FFAD55'
                                uncheckedIcon='square-o'
                                iconType='font-awesome'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <FontAwesomeIcon icon="user" size={28} color={"white"} style={styles.inputIcon} />
                            <TextInput 
                                placeholder="Username"
                                style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                                underlineColorAndroid = "transparent"
                                placeholderTextColor="rgba(255,255,255,0.5)"
                                onChangeText = {(text)=>{Setusername(text)}}
                                blurOnSubmit={false}
                                returnKeyType='next'
                                onSubmitEditing = {()=> refEmail.focus()}
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
                                placeholderTextColor="rgba(255,255,255,0.5)"
                                onChangeText = {(text)=>{Setuseremail(text)}}
                                blurOnSubmit={false}
                                returnKeyType='next'
                                ref={(i)=>{refEmail = i}}
                                onSubmitEditing = {()=> refAdd.focus()}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <FontAwesomeIcon icon="home" size={28} color={"white"} style={styles.inputIcon} />
                            <TextInput 
                                placeholder="Address, City"
                                returnKeyType="next"
                                autoCapitalize ="none"
                                autoCorrect={false}
                                style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                                underlineColorAndroid = "transparent"
                                placeholderTextColor="rgba(255,255,255,0.5)"
                                onChangeText = {(text)=>{Setuseraddress(text)}}
                                blurOnSubmit={false}
                                returnKeyType='next'
                                ref={(i)=>{refAdd = i}}
                                onSubmitEditing = {()=> refPass.focus()}
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
                                placeholderTextColor="rgba(255,255,255,0.5)"
                                onChangeText = {(text)=>{Setuserpassword(text)}}
                                blurOnSubmit={false}
                                returnKeyType='next'
                                ref={(i)=>{refPass = i}}
                                onSubmitEditing = {()=> refConfPass.focus()}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <FontAwesomeIcon icon="lock" size={28} color={"white"} style={styles.inputIcon} />
                            <TextInput 
                                placeholder="Confirm Password"
                                secureTextEntry
                                style={[styles.input,{borderBottomColor:"rgba(255,255,255,0.4)"}]}
                                underlineColorAndroid = "transparent"
                                placeholderTextColor="rgba(255,255,255,0.5)"
                                onChangeText = {(text)=>{Setconfirmpassword(text)}}
                                blurOnSubmit={false}
                                returnKeyType='done'
                                ref={(i)=>{refConfPass = i}}
                                onSubmitEditing = {()=>{
                                    InsertDataToServer()
                                    Actions.login();
                                }}
                            />
                    </View>

                        <View style={styles.signupContainer}>
                            <TouchableOpacity
                                style={styles.signupBut}
                                onPress={()=>{
                                    InsertDataToServer()
                                    Actions.login();
                                }}
                            >
                                <Text style={styles.signupText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>            
        </KeyboardAvoidingView>
    )
}

export default RegisterForm;