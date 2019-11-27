import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/OnBoarding3Styles';
import { Actions } from 'react-native-router-flux';

function OnBoarding3({setNextPage}){
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
                <Text style={styles.contenttxt}>Connect with friends, family and colleagues over affordable food and drinks. Happihour's are best spent, shared. </Text>
                <TouchableOpacity
                    style={styles.NextBut}
                    onPress={()=>(setNextPage(3))}
                >
                    <Text style={styles.NextTxt}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{Actions.login()}}
                >
                    <Text style={styles.SkipTxt}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnBoarding3;