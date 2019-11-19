import React from 'react';
import {View, Text, TextInput, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

import ExecForm from '../comps/ExecForm';
import styles from '../styles/ScreenStyles/ExecStyles';

function Exec(props) {

    var refAddress = props.address;
    var refContact = props.contact;
    var refWeb = props.web;
    var refArea = props.area;

    return(
        <KeyboardAvoidingView
        style={{flex:1}}
        behavior="height"
        >
            <ImageBackground
            style={styles.bg}
            source={require('../imgs/bg4.png')}
            >
                <ImageBackground
                        style ={styles.flow}
                        source={require('../imgs/Flow_Header.png')}
                    >
                </ImageBackground>

                    <ExecForm
                    style={{flex:1}}
                    refAddress
                    refContact
                    refWeb
                    refArea                    
                    />
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default Exec;
