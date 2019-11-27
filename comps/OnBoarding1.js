import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/OnBoarding1Styles';
import { Actions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';

function OnBoarding1({setNextPage}){
    return(
        // <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={styles.container}>
        
                <Image 
                source={require('../imgs/signUp.png')}
                style={styles.signUp}
            />

            <View style={styles.content}>
                <Text style={styles.contenttxt}>Sign up with Happihour to view all the best deals at your favourite restaurant, pub or bar.</Text>
                <TouchableOpacity
                    style={styles.NextBut}
                    onPress={()=>(setNextPage(1))}
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
        // </View>
    )
}

export default OnBoarding1;