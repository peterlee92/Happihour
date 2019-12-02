import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import style from '../styles/CompStyles/ThanksContact-popUp-style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function Confirmation({setShowPopUp, setConfirmPop}){

    const [popUp, setPopUp] = useState(false);

    var changesPop = null;

    if(popUp === false){
        changesPop =  <View style={{backgroundColor:'rgba(0,0,0,0.5)', width:'100%', height:'100%', position:'absolute', justifyContent:"center", alignItems:"center"}}>
                            <View style={style.msgContainer}>

                                <TouchableOpacity style={{position:'absolute', top:10, right:10}} onPress={()=>{setPopUp(true); setShowPopUp(false); setConfirmPop(false)}}>
                                    <FontAwesomeIcon icon={'times-circle'} size={32} />
                                </TouchableOpacity>

                                <Text style={style.thanks}>Confirmed</Text>
                                <FontAwesomeIcon icon={'check'} color={'#FEB75A'} size={60} style={{marginBottom:5}} />
                                <Text style={style.msg}>YOUR INFORMATION HAS BEEN SAVED</Text>
                            </View>
                        </View>
    } else
    if(popUp === true){
        changesPop = null;
    }

    return(
            <View style={style.container}>{changesPop}</View>
    )
}

export default Confirmation;