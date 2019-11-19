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
                    <FontAwesomeIcon icon="wine-glass-alt" transform="shrink-5"  size={80} style={style.icon}/>
                    <Text style={style.heading}>Drink For Quality, Not Quantity</Text>
                    <Text style={style.psa}>
                        Remember that quality is much better than quantity, especially when it comes to drinking alcohol. Slowly, savour your favourite drink and drink plenty of water as well.
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

export default Psa06;