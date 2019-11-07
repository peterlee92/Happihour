import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image} from 'react-native';
import AccountChanges from '../comps/AccountChanges-popUp';
import style from '../styles/ScreenStyles/EditAccount-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

function EditAccount(){

    const[ShowPopUp, setShowPopUp] = useState(false);

    var saveChanges = null;

    if(ShowPopUp === false){
        saveChanges = null;
    } else{
        saveChanges = <View style={{backgroundColor:'rgba(0,0,0,0.5)', width:'100%', height:'80%', position:'absolute', justifyContent:"center", alignItems:"center"}}>
                         <AccountChanges />
                     </View>
    }


    return(   
        <View>
            <View style={style.header}>
                <TouchableOpacity style={style.back} onPress={()=>(Actions.profile())}>
                    <FontAwesomeIcon icon='chevron-left' size={24} color="#F3D27B" style={{marginLeft:10}}/>
                    <Text style={style.edit}>EDIT ACCOUNT</Text>
                </TouchableOpacity>
                <Image source={require('../imgs/MenuBarGrad.png')} style={{backgroundColor:'#F3D27B', width:'100%', height:5, position:'absolute', bottom:0}}/>
            </View>

            <ImageBackground source={require('../imgs/bg4.png')} style={style.container}>
                <View style={style.jane}>
                    <Image style={style.janeImg} source={require('../imgs/Pororo.png')} />
                    <View>
                    <Text style={style.janeTxt}>JANE DOE</Text>
                    <Text style={style.janeSubTxt}>@JANE DOE</Text>
                    </View>
                </View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='user' size={24} color='white' />
                    <TextInput placeholder="username" placeholderTextColor='grey' style={style.inputTxt}/>
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='envelope' size={24} color='white' />
                    <TextInput placeholder="email" placeholderTextColor='grey' style={style.inputTxt} />
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='lock' size={24} color='white' />
                    <TextInput placeholder="password" placeholderTextColor='grey' style={style.inputTxt} />
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='lock' size={24} color='#EDE479' />
                    <TextInput placeholder="confirm password" placeholderTextColor='#EDE479' style={style.inputTxt} />
                </View>
                <View style={style.yellowLine}></View>

                <TouchableOpacity style={style.button} onPress={()=>(setShowPopUp(true))}>
                    <Text style={{color:"#0E1617", fontWeight:"bold"}}>SAVE</Text>
                    {/* <FontAwesomeIcon icon="chevron-right" size={21} color="#929688" style={{position:'absolute', right:10}} /> */}
                </TouchableOpacity>

                <TouchableOpacity style={style.button}>
                    <Text style={{color:"#9B3F3B", fontWeight:"bold"}}>EMERGENCY CONTACT</Text>
                </TouchableOpacity>

                {saveChanges}
                
            </ImageBackground>
        </View>
    )
}

export default EditAccount;