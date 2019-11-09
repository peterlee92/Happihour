import React from 'react';
import {View, Text, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

import AddHour from '../comps/AddHour';
import ExecNav from '../comps/ExecNav';

import btnStyles from '../styles/CompStyles/BtnStyles';
import styles from '../styles/ScreenStyles/ExecStyles';

function ExecHour() {

    return(
        <ImageBackground
            style={styles.bg}
            source={require('../imgs/bg1.png')}
        >
            <ImageBackground
                    style ={styles.flow}
                    source={require('../imgs/Flow_Header.png')}
                >
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={()=>(Actions.execInfo())}
                    >
                        <FontAwesomeIcon icon='arrow-left' size={24} color="#252E2E" style={{marginLeft:10}}/>
                    </TouchableOpacity>
            </ImageBackground>            
           
            <View style={styles.container}>
                <ExecNav />
                <Text
                    style={styles.title}>
                        HAPPY HOURS
                </Text> 
                <AddHour/>
                <TouchableOpacity>
                        <FontAwesomeIcon icon='plus' transform="shrink-5" size={50} color="#FFFFFF" style={styles.addBtn}/>
                    </TouchableOpacity>  
                    <View
                style={btnStyles.btnCont}
                >
                    <TouchableOpacity
                        style={btnStyles.solidBtn}
                        onPress={()=>{}}
                    >
                        <Text style={btnStyles.nextText}>SAVE</Text>
                    </TouchableOpacity>
                </View>                            
            </View>
        </ImageBackground>
    )
}

export default ExecHour;