import React from 'react';
import {View, Text, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

import ExecForm from '../comps/ExecForm';
import styles from '../styles/ScreenStyles/ExecStyles';

function Exec() {

    return(
        <ImageBackground
            style={styles.bg}
            source={require('../imgs/bg4.png')}
        >
            <ImageBackground
                    style ={styles.flow}
                    source={require('../imgs/Flow_Header.png')}
                >
            </ImageBackground>

            <View style={styles.container}>
                <ExecForm/>
            </View>
        </ImageBackground>
    )
}

export default Exec;
