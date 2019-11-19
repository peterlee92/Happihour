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
                <View style={style.logoRow}>
                        <Image 
                            style={{width:200, height:50, marginBottom:0}}
                            source={require('../imgs/Happihour_Logo.png')}
                        />
                        <Text style={style.helpers}>
                            HELPERS
                        </Text>                
                    </View>                
                <View style={style.psaRow}>
                    <FontAwesomeIcon icon="car" transform="shrink-5"  size={80} style={style.icon}/>
                    <Text style={style.heading}>Never Drink &amp; Drive</Text>
                    <Text style={style.psa}>
                    Drinking and driving is an irresponsible and dangerous act. If you plan to consume alcohol, it’s best to give a sober friend the keys to your vehicle. Never, ever drink and drive.
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

export default Psa05;