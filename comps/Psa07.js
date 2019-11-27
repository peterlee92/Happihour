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
            <FontAwesomeIcon icon='times-circle' color='#F1E578' size={30} style={{position:'absolute', top:-40, right:10}}/>
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
                    <FontAwesomeIcon icon="dice" transform="shrink-5"  size={80} style={style.icon}/>
                    <Text style={style.heading}>Avoid Drinking Games</Text>
                    <Text style={style.psa}>
                        Drinking games might seem like a good idea, but often times lead to people getting irresponsibly drunk. Avoid drinking games and remember  to set your limit and stay within it.
                    </Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Psa07;