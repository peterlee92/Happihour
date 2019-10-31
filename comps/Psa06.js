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

function Psa06(){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg3.png')}>
            <View style={style.container}>
            <Text style={style.helpers}>
            HELPERS</Text>
            <FontAwesomeIcon icon="wine-glass-alt" transform="shrink-5"  size={120} style={style.icon}/>
            <Text style={style.heading}>Drink For Quality, Not Quantity</Text>
            <Text style={style.psa}>
            Remember that quality is much better than quantity, especially when it comes to drinking alcohol. Slowly, savour your favourite drink and drink plenty of water as well.
                </Text>
            <TouchableOpacity style={style.solidBtn}>
                <Text
                style={style.solidText}>
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

export default Psa06;