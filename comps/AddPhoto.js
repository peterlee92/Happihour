import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

function AddPhoto(){
    return(
        <View>
        <View style={styles.imgRow}>
            <Image
                style={styles.img}
                source={require('../imgs/colony1.png')}
                />
                <Image
                style={styles.img}
                source={require('../imgs/colony1.png')}
                />
        </View>
        <View style={styles.imgRow}>
        <Image
            style={styles.img}
            source={{uri: 'http://via.placeholder.com/175x100'}}
            />
            <Image
            style={styles.img}
            source={{uri: 'http://via.placeholder.com/175x100'}}
            />
    </View>
    <TouchableOpacity>
                        <FontAwesomeIcon icon='plus' transform="shrink-5" size={40} color="#FFFFFF" style={btnStyles.addBtn}/>
                    </TouchableOpacity>                 
        </View>
        
    )
}

export default AddPhoto;