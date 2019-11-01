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

function Psa04(){
    return(
        <ImageBackground
        style={style.bg}
        source={require('../imgs/PsaBg3.png')}>
            <View style={style.container}>
            <Text style={style.helpers}>
            HELPERS</Text>
            <FontAwesomeIcon icon="cocktail" transform="shrink-5"  size={120} style={style.icon}/>
            <Text style={style.heading}>Count Your Drinks</Text>
            <Text style={style.psa}>
            It’s important to know your limits when consuming alcohol. Always be aware  of how much you’ve drank and know when it’s time to stop. Know your limit and stay within it.
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

export default Psa04;