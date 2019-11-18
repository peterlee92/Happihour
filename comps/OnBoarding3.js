import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/OnBoarding3Styles';

function OnBoarding3(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.signuptxt}>CONNECT</Text>
                <Image 
                source={require('../icons/connect.png')}
                style={styles.connect}
            />
            </View>
            <View style={styles.content}>
                <Text style={styles.contenttxt}>Connect with friends, family and colleagues over affordable food and drinks.</Text>
                <TouchableOpacity
                    style={styles.NextBut}
                >
                    <Text style={styles.NextTxt}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.SkipTxt}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnBoarding3;