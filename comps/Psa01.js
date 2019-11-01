import React from 'react';
import{
    View,
    ImageBackground,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import style from '../styles/CompStyles/PsaStyles';

function Psa01(){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg.png')}>
            <View style={style.container}>
            <Text style={style.helpers}>
            HELPERS</Text>
            <FontAwesomeIcon icon="car" transform="shrink-5"  size={120} style={style.icon}/>
            <Text style={style.heading}>Plan Your Way Home</Text>
            <Text style={style.psa}>
                Remember that it's always a good idea to plan your way home before a night out. Often, it's hard to find a ride when you need it most. Be safe, be smart and plan ahead.</Text>
            <TouchableOpacity style={style.solidBtn}>
                <Text
                style={style.solidText}>
                    EMERGENCY CONTACT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.outlineBtn}>
                <Text
                style={style.exitText}
                >EXIT</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Psa01;