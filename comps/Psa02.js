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

function Psa02(props){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg2.png')}>
            <View style={style.container}>
            <TouchableOpacity 
                    style={{position:'absolute', top:-40, right:10 }}
                    onPress={()=>{props.setPsas(false)}}
                >
                <FontAwesomeIcon icon='times-circle' color='#F1E578' size={30} />
                </TouchableOpacity>
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
                <FontAwesomeIcon icon="taxi" transform="shrink-5"  size={80} style={style.icon}/>
                <Text style={style.heading}>Call a Taxi</Text>
                <Text style={style.psa}>
                    Taxis are a safeway to get home after consuming alcohol. Make sure to save their numbers in your phone in case of an emergency.
                </Text>
            </View>
            </View>
        </ImageBackground>
    )
}

export default Psa02;