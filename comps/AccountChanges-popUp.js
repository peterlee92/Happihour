import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/AccountChanges-popUp-style';

function AccountChanges(){
    return(
        <View style={{height:"100%", width:'100%', justifyContent:'center', alignItems:'center'}}>
            <View style={style.container}>
                <View style={style.msgContainer}>
                    <Text style={style.msg}>ARE YOU SURE YOU WANT TO SAVE THESE CHANGES?</Text>
                </View>
                <View style={style.answer}>
                    <TouchableOpacity style={style.yesContainer}>
                        <Text style={style.yes}>YES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.noContainer}>
                        <Text style={style.no}>NO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AccountChanges;