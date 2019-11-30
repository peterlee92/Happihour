import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/OnBoarding3Styles';
import { Actions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';


function OnBoarding3({setNextPage}){
    return(
        <View style={styles.container}>

                <Image 
                source={require('../imgs/connect.png')}
                style={styles.connect}
            />
            <LottieView 
                    source={require('../animations/connectAnimation.json')}
                    imageAssetsFolder={'../connectAnimation.json'}
                    autoPlay
                    loop
                    style={{width:900, height:900, position:'absolute', top:-120, elevation:3}}
                /> 

            <View style={styles.content}>
                <Text style={styles.contenttxt}>Connect with friends, family and colleagues over affordable food and drinks. Happihour's are best spent, shared. </Text>
                <TouchableOpacity
                    style={styles.NextBut}
                    onPress={()=>(setNextPage(3))}
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

export default OnBoarding3;