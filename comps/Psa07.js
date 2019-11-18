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

function Psa07(){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg3.png')}>
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
                    <FontAwesomeIcon icon="dice" transform="shrink-5"  size={120} style={style.icon}/>
                    <Text style={style.heading}>Avoid Drinking Games</Text>
                    <Text style={style.psa}>
                        Drinking games might seem like a good idea, but often times lead to people getting irresponsibly drunk. Avoid drinking games and remember  to set your limit and stay within it.
                    </Text>
                </View>
                <View style={style.btnRow}>
                <TouchableOpacity style={style.yellowBtn}>
                    <Text
                    style={style.redText}>
                        LEARN MORE</Text>
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

export default Psa07;