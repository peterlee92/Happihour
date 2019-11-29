import React, {Component} from 'react';
import {ImageBackground, Image, Text, View, ActivityIndicator} from 'react-native';
import {Actions} from "react-native-router-flux";
import LottieView from 'lottie-react-native';

export default class Loading extends Component {

    // componentDidMount(){
    //     setTimeout(() => {
    //     Actions.onboarding();
    //     }, 5000);
    // }

    render(){
    return(
        <View 
            style={{
                width:'100%',
                height:'100%'
            }}
        > 
            <ImageBackground 
                source={require('../imgs/LoadingPage_BG.png')} 
                style={{
                    width:'100%', 
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text 
                    style={{
                        fontSize:16, 
                        letterSpacing:6, 
                        fontWeight:'bold', 
                        color:'white',
                        fontFamily:'Nunito-Regular',
                        marginBottom:120
                    }}
                >FIND YOUR PERFECT</Text>
                {/* <Image 
                    source={require('../imgs/HH_logo.png')} 
                    resizeMode='center' 
                    style={{
                        width:'80%', 
                        height:140
                        }}
                /> */}
                <LottieView 
                    // source={require('../animations/thirsty.json')}
                    source={require('../animations/logoAnimation.json')}
                    imageAssetsFolder={'../animations/logoAnimation.json'}
                    autoPlay
                    style={{width:900, height:900, position:'absolute'}}
                /> 
                {/* <ActivityIndicator size="large" color="orange" /> */}
            </ImageBackground>
        </View>
    )
}
}