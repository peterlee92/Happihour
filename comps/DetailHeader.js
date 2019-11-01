import React from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/DetailheaderStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


function DetailHeader (){
    return(
        <ImageBackground 
            style={styles.container}
            source={require('../imgs/colony.png')}
        >
            <View style={styles.RSContainer}>  
                <Text style={styles.RSname}>Colony</Text>
                <FontAwesomeIcon icon='times-circle' color={'#e6dc60'} size={25} style={{position:'absolute', right:10, top:15}}/>
            </View>

            <View style={styles.directionContainer}>
                <TouchableOpacity style={styles.directionBut}>
                    <FontAwesomeIcon icon='directions' size={20} color={'black'} style={{marginRight:5}}/>
                    <Text>GET DIRECTIONS</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.HTcontainer}>
                <Text style={styles.HT}>DAILY FROM 3:00PM - 5:00PM</Text>    
            </View>
        </ImageBackground>
    )
}

export default DetailHeader;
