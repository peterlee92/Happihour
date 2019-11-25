import React from 'react';
import {View, Text, ImageBackground,ScrollView} from 'react-native';
import DetailHeader from '../comps/DetailHeader';
import DetailContent from '../comps/DetailContent';
import styles from '../styles/ScreenStyles/DetailStyles';

function Detail(props){
    console.log(props.text)
    return(
        <ScrollView style={styles.scroll}>
            <DetailHeader 
                text={props.text}
            />

            <DetailContent 
                text={props.text}
            />           
             
        </ScrollView>
    )
}

export default Detail;