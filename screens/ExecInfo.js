import React from 'react';
import {View, Text, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

import ExecForm from '../comps/ExecForm';
import styles from '../styles/ScreenStyles/ExecStyles';

function ExecInfo() {

    return(
        <ImageBackground
            style={styles.bg}
            source={require('../imgs/bg4.png')}
        >
            <ImageBackground
                    style ={styles.flow}
                    source={require('../imgs/Flow_Header.png')}
                >
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={()=>(Actions.login())}
                    >
                        <FontAwesomeIcon icon='arrow-left' size={24} color="#252E2E" style={{marginLeft:10}}/>
                    </TouchableOpacity>
            </ImageBackground>

            <View style={styles.container}>
                <Text style={styles.title}>EXECUTIVE MODE</Text>
                <ExecForm/>
            </View>
        </ImageBackground>
    )
}

export default ExecInfo;
