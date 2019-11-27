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
import styles from '../styles/ScreenStyles/ExecStyles';

function Psa01(){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg.png')}>
            <View style={style.container}>
                <FontAwesomeIcon icon='times-circle' color='#F1E578' size={30} style={{position:'absolute', top:-40, right:10 }}/>
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
                    <FontAwesomeIcon icon="hands-helping" transform="shrink-5"  size={80} style={style.icon}/>                    
                    <Text style={style.heading}>Plan Your Way Home</Text>
                   <Text style={style.psa}>
                        Remember that it's always a good idea to plan your way home before a night out. Often, it's hard to find a ride when you need it most. Be safe, be smart and plan ahead.
                    </Text>                    
                </View>
            </View>
        </ImageBackground>
    )
}

export default Psa01;