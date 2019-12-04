import React from 'react';
import {View, Image, StyleSheet, ImageBackground, Text} from 'react-native';

function Thankyou(){
    return(
        <ImageBackground
            source={require('../imgs/thankyouBG.png')}
            style={styles.container}
        >
            <View style={styles.header}>
                <Image 
                    source={require('../imgs/Flow_Header.png')}
                    style={{width:'100%', height:60, resizeMode:'contain'}}
                />
            </View>
            <View style={{flex:5}}>
                <Text style={[styles.txt,{fontSize:60, marginBottom:30}]}>Thank you!</Text>
                <Text style={[styles.txt, {fontSize:25}]}>For spending time</Text>
                <Text style={[styles.txt, {fontSize:25}]}>with us</Text>
            </View>
            <View style={{flex:3, paddingHorizontal:20}}>
                <Text style={[styles.bottomtxt, {marginBottom:15, marginLeft:5}]}>from the</Text>
                <Image 
                    source={require('../imgs/Happihour_Logo.png')}
                    style={{width:'100%', height:100, resizeMode:'contain'}}
                />
                <Text style={[styles.bottomtxt, {textAlign:'right'}]}>team</Text>
            </View>
        </ImageBackground>
    )
}

export default Thankyou;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        resizeMode:'contain'
    },
    header:{
        width:'100%',
        height:100,
        flex:1.5,
        position:'relative'
    },
    txt:{
        color:'white',
        textAlign:'center',
        fontFamily:"Nunito-Bold"
    },
    bottomtxt:{
        color:'white',
        fontFamily:"Nunito-Bold",
        fontSize:17
    }
});