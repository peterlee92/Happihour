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

function Psa03(){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg2.png')}>
            <View style={style.container}>
            <Text style={style.helpers}>
            HELPERS</Text>
            <FontAwesomeIcon icon="hamburger" transform="shrink-5"  size={120} style={style.icon}/>
            <Text style={style.heading}>Eat Before &amp; During</Text>
            <Text style={style.psa}>
            Never drink alcohol on an empty stomach. Make sure to eat before and during, in order to help your body better absorb alcohol. Also, drink plenty of water.
                </Text>
            <TouchableOpacity style={style.solidBtn}>
                <Text
                style={style.ecText}>
                    LEARN MORE</Text>
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

export default Psa03;