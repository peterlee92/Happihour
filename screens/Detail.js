import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import DetailHeader from '../comps/DetailHeader';
import DetailContent from '../comps/DetailContent';

function Detail () {
    return(
        <ImageBackground
            style={{width:'100%',height:'100%',resizeMode:'cover'}}
            source={require('../imgs/bg1.png')}
        >
            <DetailHeader />
            <DetailContent />
        </ImageBackground>
    )
}

export default Detail;