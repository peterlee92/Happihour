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
            <View style={style.logoRow}>
                    <Image 
                        style={{width:200, height:50, margin:0}}
                        source={require('../imgs/Happihour_Logo.png')}
                    />
                    <Text style={style.helpers}>
                        HELPERS
                    </Text>                
                </View>                

                <View style={style.psaRow}>
                    <FontAwesomeIcon icon="hamburger" transform="shrink-5"  size={80} style={style.icon}/>
                    <Text style={style.heading}>Eat Before &amp; During</Text>
                    <Text style={style.psa}>
                        Never drink alcohol on an empty stomach. Make sure to eat before and during, in order to help your body better absorb alcohol. Also, drink plenty of water.
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
                        style={style.btnText}>
                        EXIT
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    )
}

export default Psa03;