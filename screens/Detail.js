import React from 'react';
import {View, Text, ImageBackground,ScrollView} from 'react-native';
import DetailHeader from '../comps/DetailHeader';
import DetailContent from '../comps/DetailContent';
import styles from '../styles/ScreenStyles/DetailStyles';

function Detail () {
    return(
        <ScrollView style={styles.scroll}>
        <DetailHeader />
        <ImageBackground
            style={styles.bg}
            source={require('../imgs/bg3.png')}
            >
            <DetailContent />
            
        </ImageBackground>
        </ScrollView>
    )
}

export default Detail;