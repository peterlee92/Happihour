import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/DetailheaderStyles';


function DetailHeader (){
    return(
        <View>
            <View style={styles.topContainer}>
                <Image 
                    // source={require('../icons/backbutton.png')}
                    style={styles.backBut}
                />
                <Text style={styles.RSname}>Colony</Text>
                <Image 
                    // source={require('../icons/fav_icon2.png')}
                    style={styles.favIcon}
                />
            </View>
            <Text style={styles.address}>2904 Main Street</Text>
            <View style={styles.HTcontainer}>
                <Text style={styles.HT}>Daily 3pm - 6pm</Text>    
            </View>
        </View>
    )
}

export default DetailHeader;
