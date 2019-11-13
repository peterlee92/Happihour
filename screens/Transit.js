import React from 'react';
import {Text, Image, View, TouchableOpacity, ImageBackground} from 'react-native';
import style from '../styles/ScreenStyles/Transit-style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import Gethomemap from '../comps/Gethomemap';

function Transit(){
    return(
        <View style={{flex:1}}>
            <View style={style.header}>
                    <TouchableOpacity style={style.back} onPress={()=>(Actions.getHome())}>
                        <FontAwesomeIcon icon='chevron-left' size={24} color="#F3D27B" style={{marginLeft:10}}/>
                        <Text style={style.edit}>Transit</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#F3D27B', width:'100%', height:5, position:'absolute', bottom:0}}></View>
            </View>
            <Gethomemap />
        </View>
    )
}

export default Transit;