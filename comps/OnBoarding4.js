import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/OnBoarding4Styles';
import {Actions} from 'react-native-router-flux';
import LottieView from 'lottie-react-native';


function OnBoarding4(){

    const[loaded, setLoaded] = useState(false);

    if(loaded){
        return null;
    }

    return(
        <View style={styles.container}>
                <Image 
                source={require('../imgs/behappy.png')}
                style={styles.behappy}
            />
            <LottieView 
                    source={require('../animations/vectorBeHappyAnimations.json')}
                    imageAssetsFolder={'../animations/vectorBeHappyAnimations.json'}
                    autoPlay
                    style={{width:800, height:800, position:'absolute', top:-20, elevation:3}}
                /> 
            <View style={styles.content}>
                <Text style={styles.contenttxt}>Be happy together and make your happy last longer than just an hour!</Text>
            </View>
            <TouchableOpacity
                    style={styles.letsgoBut}
                    onPress={()=>{Actions.login();setLoaded(true);}}
                >
                    <Text style={styles.letsgoTxt}>LET'S GO!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OnBoarding4;