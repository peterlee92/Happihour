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

function Psa07(){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg3.png')}>
            <View style={style.container}>
            <Text style={style.helpers}>
            HELPERS</Text>
            <FontAwesomeIcon icon="dice" transform="shrink-5"  size={120} style={style.icon}/>
            <Text style={style.heading}>Avoid Drinking Games</Text>
            <Text style={style.psa}>
            Drinking games might seem like a good idea, but often times lead to people getting irresponsibly drunk. Avoid drinking games and remember  to set your limit and stay within it.
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

export default Psa07;