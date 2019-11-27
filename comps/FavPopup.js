import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/CompStyles/FavPopupStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


function FavPopup(){
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image
                    source={require('../imgs/heart.png')}
                    style={styles.heart}
                />
                <Text style={styles.txt}>Add your favourite restaurants for easy and fast access to amazing deals!</Text>
            </View>
        </View>
    )
}

export default FavPopup;