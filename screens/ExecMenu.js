import React from 'react';
import {View, Text, TextInput, ImageBackground, Image, TouchableOpacity, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from '../styles/ScreenStyles/ExecStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

import NextBtn from '../comps/NextBtn';
import ItemBtn from '../comps/ItemBtn';
import AddMenu from '../comps/AddMenu';
import ExecNav from '../comps/ExecNav';

function ExecHour() {

    return(
        <ImageBackground
            style={styles.bg}
            source={require('../imgs/bg1.png')}
        >       
            <ScrollView>
            <Image
                    style ={[styles.flow,{height:80}]}
                    source={require('../imgs/Flow_Header.png')}
            >
            </Image>             
                <View style={styles.container}>
                    
                    <ExecNav />
                    <Text style={styles.overline}>
                            SUBMIT YOUR HAPP HOUR MENU</Text>                
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={[styles.title,{flex:2, color:"#FFD96F"}]}>DRINKS</Text>
                        <TouchableOpacity>
                        <Text style={styles.overline}>EDIT</Text>
                    </TouchableOpacity>
                    </View>

                    <View>
                        <AddMenu/>
                        <AddMenu/>
                        <AddMenu/>
                    </View>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon='plus' transform="shrink-5" size={50} color="#FFFFFF" style={btnStyles.addBtn}/>
                    </TouchableOpacity> 
                    <TouchableOpacity>
                        <FontAwesomeIcon icon='minus' transform="shrink-5" size={50} color="#FFFFFF" style={btnStyles.removeBtn}/>
                    </TouchableOpacity>                    
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={[styles.title,{flex:2,color:"#FFD96F"}]}>FOOD</Text>
                        <TouchableOpacity>
                        <Text style={styles.overline}>EDIT</Text>
                    </TouchableOpacity>
                    </View>

                    <View>
                        <AddMenu/>
                        <AddMenu/>
                        <AddMenu/>
                    </View>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon='plus' transform="shrink-5" size={50} color="#FFFFFF" style={btnStyles.addBtn}/>
                    </TouchableOpacity> 
                    <TouchableOpacity>
                        <FontAwesomeIcon icon='minus' transform="shrink-5" size={50} color="#FFFFFF" style={btnStyles.removeBtn}/>
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
            </ScrollView>
        </ImageBackground>
    )
}

export default ExecHour;