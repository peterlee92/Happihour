import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/OnBoarding2Styles';

function OnBoarding2(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.signuptxt}>DISCOVER</Text>
                <Image 
                source={require('../icons/discover.png')}
                style={styles.discover}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.contenttxt}>Search by day, time of day or location and discover new food and drinks deals in your neighbourhood and beyond!</Text>
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

export default OnBoarding2;