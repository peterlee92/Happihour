import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/OnBoarding2Styles';
import { Actions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';


function OnBoarding2({setNextPage}){
    return(
        <View style={styles.container}>

                <Image 
                source={require('../imgs/discover.png')}
                style={styles.discover}
                />
            <LottieView 
                    // source={require('../animations/thirsty.json')}
                    source={require('../animations/planetAnimation.json')}
                    imageAssetsFolder={'../planetAnimation.json'}
                    autoPlay
                    loop
                    style={{width:1000, height:1000, position:'absolute', top:-115, elevation:3}}
                /> 
            <View style={styles.content}>
                <Text style={styles.contenttxt}>Search by day, time of day or location and discover new food and drinks deals in your neighbourhood and beyond!</Text>
                <TouchableOpacity
                    style={styles.NextBut}
                    onPress={()=>(setNextPage(2))}
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

export default OnBoarding2;