import React, {Component} from 'react';
import {ImageBackground, Image, Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Actions} from "react-native-router-flux";
import LottieView from 'lottie-react-native';

export default class Loading extends Component {

    // componentDidMount(){
    //     setTimeout(() => {
    //     Actions.board1();
    //     }, 4250);
    // }

    render(){
    return(
        <View 
            style={{
                width:'100%',
                height:'100%'
            }}
        > 
            <TouchableOpacity
            onPress={()=>{
                Actions.board1()
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
                            marginBottom:140
                        }}>
                            FIND YOUR PERFECT
                    </Text>
                    <LottieView 
                        source={require('../animations/logoanimationFriday.json')}
                        imageAssetsFolder={'../animations/logoanimationFriday.json'}
                        autoPlay
                        style={{width:900, height:900, position:'absolute'}}
                    />
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}
}