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

function Psa02(){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg2.png')}>
            <View style={style.container}>
            <Text style={style.helpers}>
            HELPERS</Text>
            <FontAwesomeIcon icon="taxi" transform="shrink-5"  size={120} style={style.icon}/>
            <Text style={style.heading}>Call a Taxi</Text>
            <Text style={style.psa}>
            Taxis are a safeway to get home after consuming alcohol. Make sure to save their numbers in your phone in case of an emergency.
                </Text>
            <TouchableOpacity style={style.solidBtn}>
                <Text
                style={style.ecText}>
                    CALL A TAXI</Text>
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

export default Psa02;