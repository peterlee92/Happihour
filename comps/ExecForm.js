import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

function ExecForm(){

    return(
            <View
            style={styles.container}
            >
                <Text style={styles.overline}>
                    ENTER YOUR BAR OR RESTAURANT INFORMATION BELOW</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Company Name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contact Number"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Website URL"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Location"
                />
                <View
                style={btnStyles.btnCont}
                >
                    <TouchableOpacity
                        style={btnStyles.solidBtn}
                        onPress={()=>{Actions.execHour()}}
                    >
                        <Text style={btnStyles.nextText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default ExecForm;