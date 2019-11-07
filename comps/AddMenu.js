import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from '../styles/CompStyles/ExecCompStyles';


function AddMenu(){

    return(
            <View style={[{flexDirection:"row"}]}>
                <TextInput
                    style={[styles.input,{width:200}]}
                    placeholder="Menu Item"/>
                <TextInput
                    style={[styles.input,{width:100}]}
                    placeholder="0.00"/>
            </View>
    )
}

export default AddMenu;
