import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image} from 'react-native';
import ThanksEmail from '../comps/ThanksEmail-popUp';
import style from '../styles/ScreenStyles/ForgotPassword-style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function ForgotPassword(){

    const[ShowPopUp, setShowPopUp] = useState(false);

    var saveChanges = null;

    if(ShowPopUp === false){
        saveChanges = null;
    } else{
        saveChanges = <ThanksEmail setShowPopUp={setShowPopUp}/>
    }


    return(   

            <ImageBackground source={require('../imgs/background1.jpg')} style={style.container}>
            <View style={[style.container, style.overlay]}>

            <Image source={require('../imgs/Flow_Header.png')} style={{width:'100%', height:75, position:'absolute', top:0}} />

            <TouchableOpacity style={style.backBtn} onPress={()=>(Actions.pop())}>
            <FontAwesomeIcon icon={faChevronLeft} size={24} />
            </TouchableOpacity>
            <View style={{width:'75%', marginBottom:50, alignItems:'center'}}>
                <Image
                    style={{width:100,height:100}}
                    source={require('../imgs/email.png')}
                />
                <Text style={style.txtInfo}>Enter the email address you used to 
                    create your account and we will email
                    you a link to reset your password
                </Text>
            </View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='envelope' size={24} color='#EDE479' />
                    <TextInput placeholder="email" placeholderTextColor='#EDE479' style={style.inputTxt} />
                </View>
                <View style={style.yellowLine}></View>

                <TouchableOpacity style={style.button} onPress={()=>(setShowPopUp(true))}>
                    <Text style={{color:"#0E1617", fontWeight:"bold", letterSpacing:3, fontSize:16}}>Send Email</Text>
                </TouchableOpacity>

                {saveChanges}
            </View>
            </ImageBackground>
    )
}

export default ForgotPassword;