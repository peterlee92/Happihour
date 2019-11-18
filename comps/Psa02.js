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
import styles from '../styles/AppStyle';

function Psa02(){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg2.png')}>
            <View style={style.container}>

            <View style={style.logoRow}>
                    <Image 
                        style={{width:250, height:50, margin:20}}
                        source={require('../imgs/Happihour_Logo.png')}
                    />
                    <Text style={style.helpers}>
                        HELPERS
                    </Text>                
                </View>                

            <View style={style.psaRow}>
                <FontAwesomeIcon icon="taxi" transform="shrink-5"  size={120} style={style.icon}/>
                <Text style={style.heading}>Call a Taxi</Text>
                <Text style={style.psa}>
                    Taxis are a safeway to get home after consuming alcohol. Make sure to save their numbers in your phone in case of an emergency.
                </Text>
            </View>
            <View style={style.btnRow}>
                <TouchableOpacity style={style.yellowBtn}>
                    <Text
                    style={style.redText}>
                        CALL A TAXI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.orangeBtn}>
                    <Text
                    style={style.btnText}
                    >EXIT</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ImageBackground>
    )
}

export default Psa02;