import React, {useState} from 'react';
import {View, Text, TextInput, Image, ImageBackground, TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

import style from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';
import styles from '../styles/ScreenStyles/ExecStyles';

import ExecHour from '../comps/ExecHour';
import ExecMenu from '../comps/ExecMenu';
import ExecPhoto from '../comps/ExecPhoto';

function ExecInfo(props) {

    var execHour = <ExecHour 
    />;   
    var execMenu = <ExecMenu />;
    var execPhoto = <ExecPhoto />;
             
    const [screen, setScreen] = useState(execHour);
    const [btnSize, setBtnSize] = useState(false);

    var selectBtn = null;
    var size = 50;

    // if(btnSize ==true){
    //     size=70;
    // }else{
    //     size=50;
    // }
    var hSize = 70;
    var mSize = 50;
    var pSize = 50;


    return(
      <KeyboardAvoidingView
      style={{flex:1}}
        behavior="height">
            <ImageBackground
                        style={styles.bg}
                        source={require('../imgs/bg1.png')}
                    >
                        {/** Header */}
                        <ImageBackground
                                style ={styles.flow}
                                source={require('../imgs/Flow_Header.png')}
                            >
                                <TouchableOpacity
                                    style={styles.backBtn}
                                    onPress={()=>(Actions.exec())}
                                >
                                    <FontAwesomeIcon icon='chevron-left' size={24} color="#252E2E" style={{marginLeft:10}}/>
                                </TouchableOpacity>
                        </ImageBackground>            
                    
                        <View style={styles.container}>
                        {/** Navigation */}
                        <View style={[styles.nav]}>
                            <Text style={style.overline}>CLICK ON THE ICONS TO NAVIGATE</Text>          
                                <View style={style.menu}>
                                    <TouchableOpacity
                                    onPress={()=> setScreen(execHour)}
                                    >
                                        <FontAwesomeIcon icon="calendar-alt" transform="shrink-5"  size={hSize} style={styles.icon}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    onPress={()=> setScreen(execMenu)}
                                    >
                                        <FontAwesomeIcon icon="glass-cheers" transform="shrink-5"  size={mSize} style={styles.icon}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    onPress={()=> setScreen(execPhoto)}
                                    >
                                        <FontAwesomeIcon icon="image" transform="shrink-5"  size={pSize} style={styles.icon}/>
                                    </TouchableOpacity>
                                </View>                   
                            </View>      

                
                        {/** Main Screen */}                
                            <View style={style.screen}>
                                {screen}
                            </View>
                                    
                        </View>
                    </ImageBackground>          
      </KeyboardAvoidingView>
    )
}

export default ExecInfo;