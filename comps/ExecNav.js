import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/CompStyles/ExecCompStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function ExecNav(){
    return(
        <View style={styles.nav}>
            <Text style={styles.overline}>CLICK ON THE ICONS TO NAVIGATE</Text>
            <View style={styles.menu}>
                <TouchableOpacity
                    onPress={()=>(Actions.execHour())}
                >
                    <FontAwesomeIcon icon="calendar-alt" transform="shrink-5"  size={70} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>(Actions.execMenu())}
                >
                    <FontAwesomeIcon icon="cocktail" transform="shrink-5"  size={70} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>(Actions.execPhoto())}
                >
                    <FontAwesomeIcon icon="image" transform="shrink-5"  size={70} style={styles.icon}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ExecNav;