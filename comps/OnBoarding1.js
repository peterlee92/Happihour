import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/OnBoarding1Styles';
import { Actions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';

function OnBoarding1(){

    const[loaded, setLoaded] = useState(false);

    if(loaded){
        return null;
    }

    return(
        <View style={styles.container}>    
                <Image 
                source={require('../imgs/signUp.png')}
                style={styles.signUp}
            />
            <LottieView 
                    source={require('../animations/Signup_Animation.json')}
                    imageAssetsFolder={'../animations/Signup_Animation.json'}
                    autoPlay
                    style={{width:1000, height:1000, position:'absolute', top:-50}}
                /> 
            <View style={styles.content}>
                <Text style={styles.contenttxt}>Sign up with Happihour to view all the best deals at your favourite restaurant, pub or bar.</Text>
                <TouchableOpacity
                    style={styles.NextBut}
                    onPress={()=>{
                        setLoaded(true);
                        Actions.board2();
                    }}
                >
                    <Text style={styles.NextTxt}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{Actions.login()}}
                >
                    <Text style={styles.SkipTxt}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnBoarding1;