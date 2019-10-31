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

function Psa05(){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg.png')}>
            <View style={style.container}>
            <Text style={style.helpers}>
            HELPERS</Text>
            <FontAwesomeIcon icon="car" transform="shrink-5"  size={120} style={style.icon}/>
            <Text style={style.heading}>Never Drink &amp; Drive</Text>
            <Text style={style.psa}>
            Drinking and driving is an irresponsible and dangerous act. If you plan to consume alcohol, it’s best to give a sober friend the keys to your vehicle. Never, ever drink and drive.
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

export default Psa05;