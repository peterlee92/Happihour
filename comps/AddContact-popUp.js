import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, TextInput} from 'react-native';
import style from '../styles/CompStyles/AddContact-popUp-style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Confirmation from './Confirmation-popUp';

function AddContact(){

    const [popUp, setPopUp] = useState(false);
    const [popUp2, setPopUp2] = useState(false);

    var changesPop = null;
    var saved = null;

    if(popUp === false){
        changesPop =  <View style={{backgroundColor:'rgba(0,0,0,0.5)', width:'100%', height:'100%', position:'absolute', justifyContent:"center", alignItems:"center", top:-100}}>
                            <View style={style.msgContainer}>

                                <TouchableOpacity style={{position:'absolute', top:10, right:10}} onPress={()=>(setPopUp(true))}>
                                    <FontAwesomeIcon icon={'times-circle'} size={32} color={'#EDE479'} />
                                </TouchableOpacity>

                                <Text style={style.msg}>ENTER YOUR EMERGENCY CONTACT</Text>
                                <TextInput placeholder='First Name' placeholderTextColor='white' style={style.input}/>
                                <TextInput placeholder='Last Name' placeholderTextColor='white' style={style.input}/>
                                <TextInput placeholder='Contact No.' placeholderTextColor='white' style={style.input}/>
                                
                                <TouchableOpacity style={style.button} onPress={()=>([setPopUp(true), setPopUp2(true)])}>
                                    <Text style={{color:"#0E1617", fontWeight:"bold"}}>SAVE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
    } else
    if(popUp === true){
        changesPop = null;
    }
    
    if(popUp2 === false){
        saved = null;
    }else
    if(popUp2 === true){
        saved = <Confirmation />
    }

    return(
        <View style={style.container}>
            <View style={style.container}>{changesPop}</View>
            <View style={[style.container, {top:-100}]}>{saved}</View>
        </View>
    )
}

export default AddContact;