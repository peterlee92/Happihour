import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/DetailContentStyles';

function DetailContent(){
    return(
        <View>
            <View style={styles.menuContainer}>
                <Text style={styles.menu}>DRINKS</Text>
            </View>
            <View style={styles.menuContainer}>
                <Text style={styles.menu}>FOOD</Text>
            </View>
        </View>
    )
}

export default DetailContent;