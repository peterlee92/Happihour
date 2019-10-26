import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/MainHeaderStyles';

function MainHeader(){
    return(
        <View style={styles.headerContainer}>
            <Image 
                // source={require('../icons/logo_icon.png')}
                style={styles.logo}
            />
            <Text style={styles.pageName}>Location</Text>
            <Image 
                // source={require('../icons/profile_icon.png')}
                style={styles.profile}
            />
        </View>
    )
}

export default MainHeader;