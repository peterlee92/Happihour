import React, {useState} from 'react';
import {View, Text, TextInput, Image, ImageBackground, TouchableOpacity,ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

import style from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';
import styles from '../styles/ScreenStyles/ExecStyles';

import ExecHour from '../comps/ExecHour';
import ExecMenu from '../comps/ExecMenu';
import ExecPhoto from '../comps/ExecPhoto';

function ExecInfo() {

    var execHour = <ExecHour />;   
    var execMenu = <ExecMenu />;
    var execPhoto = <ExecPhoto />;
             
    const [screen, setScreen] = useState(execHour);
    const [btnOp, setBtnOp] = useState(false);

    var selectBtn = null;
    var bgColor = 'rgba(244, 230, 100, .1)';

    if(btnOp ==true){
        bgColor = 'rgba(244, 230, 100, 1)';
    }else{
        bgColor = 'rgba(244, 230, 100, .1)';
    }


    

    return(
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
               <View style={style.nav}>
                <Text style={style.overline}>CLICK ON THE ICONS TO NAVIGATE</Text>          
                    <View style={style.menu}>
                        <TouchableOpacity
                        onPress={()=> 
                        setBtnOp()}
                        >
                            <FontAwesomeIcon icon="calendar-alt" transform="shrink-5"  size={70} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=> setScreen(execMenu)}
                        >
                            <FontAwesomeIcon icon="glass-cheers" transform="shrink-5"  size={70} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=> setScreen(execPhoto)}
                        >
                            <FontAwesomeIcon icon="image" transform="shrink-5"  size={70} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>                   
                </View>      

    
               {/** Main Screen */}                
                <View style={style.screen}>
                    {screen}
                </View>
                          
            </View>
        </ImageBackground>
    )
}

export default ExecInfo;