import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/OnBoarding4Styles';
import { Actions } from 'react-native-router-flux';

function OnBoarding3(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.signuptxt}>BE HAPPY</Text>
                <Image 
                source={require('../icons/behappy.png')}
                style={styles.behappy}
            />
            </View>
            <View style={styles.content}>
                <Text style={styles.contenttxt}>Be happy together and make your happy last longer than just an hour!</Text>
            </View>
            <TouchableOpacity
                    style={styles.letsgoBut}
                    onPress={()=>{Actions.login()}}
                >
                    <Text style={styles.letsgoTxt}>LET'S GO!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OnBoarding3;