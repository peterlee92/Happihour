import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image} from 'react-native';
import style from '../styles/ScreenStyles/ContactUs-style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import ThanksContact from '../comps/ThanksContact-popUp';

function ContactUs(){

    const[ShowPopUp, setShowPopUp] = useState(false);

    var sendMsg = null;

    if(ShowPopUp === false){
        sendMsg = null;
    } else{
        sendMsg = <ThanksContact />
    }

    return(
        <View>
            <View style={style.header}>
                <TouchableOpacity style={style.back} onPress={()=>(Actions.profile())}>
                    <FontAwesomeIcon icon='chevron-left' size={24} color="#F3D27B" style={{marginLeft:10}}/>
                    <Text style={style.edit}>CONTACT US</Text>
                </TouchableOpacity>
                <Image source={require('../imgs/MenuBarGrad.png')} style={{backgroundColor:'#F3D27B', width:'100%', height:5, position:'absolute', bottom:0}}/>
            </View>

            <ImageBackground source={require('../imgs/bg4.png')} style={style.container}>
                <View style={style.input}>
                    <FontAwesomeIcon icon='user' size={24} color='white' />
                    <TextInput placeholder="name" placeholderTextColor='grey' style={style.inputTxt}/>
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='pen' size={24} color='white' />
                    <TextInput placeholder="subject" placeholderTextColor='grey' style={style.inputTxt} />
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='envelope-open' size={24} color='white' />
                    <TextInput placeholder="message" placeholderTextColor='grey' style={style.inputTxt} />
                </View>
                <View style={style.inputLine}></View>

                <TouchableOpacity style={style.button} onPress={()=>(setShowPopUp(true))}>
                    <Text style={{color:"#0E1617", fontWeight:"bold", letterSpacing:2}}>SEND</Text>
                </TouchableOpacity>

                {sendMsg}
            </ImageBackground>
        </View>
    )
}

export default ContactUs;