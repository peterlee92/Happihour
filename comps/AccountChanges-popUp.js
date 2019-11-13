import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import style from '../styles/CompStyles/AccountChanges-popUp-style';
import Confirmation from './Confirmation-popUp';

function AccountChanges({setShowPopUp}){

    const [popUp, setPopUp] = useState(false);
    const [popUp2, setPopUp2] = useState(false);

    var changesPop = null;
    var saved = null;

    if(popUp === false){
        changesPop =     <View style={{backgroundColor:'rgba(0,0,0,0.5)', width:'100%', height:'100%', position:'absolute', justifyContent:"center", alignItems:"center"}}>
                            <View style={style.msgContainer}>
                                <Text style={style.msg}>ARE YOU SURE YOU WANT TO SAVE THESE CHANGES?</Text>
                            </View>
                            <View style={style.answer}>
                                <TouchableOpacity style={style.yesContainer} onPress={()=>([setPopUp(true), setPopUp2(true)])}>
                                    <Text style={style.yes}>YES</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.noContainer} onPress={()=>{setPopUp(true); setShowPopUp(false)}}>
                                    <Text style={style.no}>NO</Text>
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
        saved = <Confirmation setShowPopUp={setShowPopUp} />
    }

    return(
            <View style={style.container}>
                <View style={style.container}>{changesPop}</View>
                <View style={style.container}>{saved}</View>
            </View>
    )
}

export default AccountChanges;