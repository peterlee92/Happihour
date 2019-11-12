import React from 'react';
import {View, Text, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import ExecNav from '../comps/ExecNav';
import AddPhoto from '../comps/AddPhoto';

import styles from '../styles/ScreenStyles/ExecStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

function ExecPhoto() {

    return(
        <ImageBackground
            style={styles.bg}
            source={require('../imgs/bg1.png')}
        >
            <ImageBackground
                    style ={styles.flow}
                    source={require('../imgs/Flow_Header.png')}
                >
            </ImageBackground> 

            <View style={styles.container}>
                <ExecNav/>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={[styles.title,{flex:2,color:"#FFD96F"}]}>PHOTOS</Text>
                        <TouchableOpacity>
                        <Text style={styles.overline}>EDIT</Text>
                    </TouchableOpacity>
                    </View>

                    <View>
                        <AddPhoto/>
                    </View>
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

export default ExecPhoto;
