import React from 'react';
import {View, TextInput, TouchableOpacity, Text, Picker} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

function AddHour(){

    return(
            <View
            style={[btnStyles.mainCont,{borderWidth:2, borderColor:"white", padding:10, margin:10}]}
            >
                <Text style={styles.overline}>SUBMIT YOUR HAOOY HOUR DAYS AND TIME</Text>
                <View style={styles.day}>
                    <View>
                        <TouchableOpacity
                            style={btnStyles.roundBtn}
                        >
                            <Text>M</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={btnStyles.roundBtn}
                        >
                            <Text>T</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={btnStyles.roundBtn}
                        >
                            <Text>W</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={btnStyles.roundBtn}
                        >
                            <Text>T</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={btnStyles.roundBtn}
                        >
                            <Text>F</Text>
                        </TouchableOpacity>                            
                    </View>                
                    <View>
                        <TouchableOpacity
                            style={btnStyles.roundBtn}
                        >
                            <Text>S</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={btnStyles.roundBtn}
                        >
                            <Text>S</Text>
                        </TouchableOpacity>
                    </View>                     
                </View>
                <View>
                    <Text style={styles.overline}>START TIME</Text>
                    { /*Add Time Picker*/ }
                </View>
                <View>
                    <Text style={styles.overline}>END TIME</Text>
                    { /*Add Time Picker*/ }
                </View>   
            </View>
    )
}

export default AddHour;