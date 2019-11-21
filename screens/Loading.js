import React from 'react';
import {ImageBackground, Image, Text, View} from 'react-native';

function Loading(){
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
                        fontFamily:'Nunito-Regular'
                    }}
                >FIND YOUR PERFECT</Text>
                <Image 
                    source={require('../imgs/HH_logo.png')} 
                    resizeMode='center' 
                    style={{
                        width:'80%', 
                        height:140
                        }}
                />
            </ImageBackground>
        </View>
    )
}

export default Loading;