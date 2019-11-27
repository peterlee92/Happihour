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
            <FontAwesomeIcon icon='times-circle' color='#F1E578' size={30} style={{position:'absolute', top:-40, right:10 }}/>
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
                    <FontAwesomeIcon icon="cocktail" transform="shrink-5"  size={80} style={style.icon}/>
                    <Text style={style.heading}>Count Your Drinks</Text>
                     <Text style={style.psa}>
                        It’s important to know your limits when consuming alcohol. Always be aware  of how much you’ve drank and know when it’s time to stop. Know your limit and stay within it.
                    </Text>
                </View>

            </View>
        </ImageBackground>
    )
}

export default Psa04;