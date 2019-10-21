import React from 'react';
import {View, Text, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import styles from '../styles/DetailheaderStyles';

import {Actions} from 'react-native-router-flux';


function DetailHeader (){


    
    return(
        <View>
            <View style={styles.topContainer}>
                <TouchableOpacity
                    onPress={()=>{}}
                >
                    <Image 
                        source={require('../icons/backbutton.png')}
                        style={styles.backBut}
                    />
                </TouchableOpacity>
                <Text style={styles.RSname}>Colony</Text>
                <Image 
                    source={require('../icons/fav_icon2.png')}
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
