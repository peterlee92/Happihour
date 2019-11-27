import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image} from 'react-native';
import AccountChanges from '../comps/AccountChanges-popUp';
import style from '../styles/ScreenStyles/EditAccount-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import AddContact from '../comps/AddContact-popUp';

function EditAccount(){

    const[ShowPopUp, setShowPopUp] = useState(false);

    var saveChanges = null;

    if(ShowPopUp == true){
        saveChanges = <AccountChanges setShowPopUp={setShowPopUp}/>
    } else{
        saveChanges = null;
    }


    const[ShowPopUp2, setShowPopUp2] = useState(false);

    var emergency = null;

    if(ShowPopUp2 == true){
        emergency = <AddContact setShowPopUp2={setShowPopUp2}/>
    } else{
        emergency = null;
    }



    return(   
        <View>
            <View style={style.header}>
                <TouchableOpacity style={style.back} onPress={()=>(Actions.pop())}>
                    <FontAwesomeIcon icon='chevron-left' size={24} color="#F3D27B" style={{marginLeft:10}}/>
                    <Text style={style.edit}>EDIT ACCOUNT</Text>
                </TouchableOpacity>
                <Image source={require('../imgs/MenuBarGrad.png')} style={{backgroundColor:'#F3D27B', width:'100%', height:1.5, position:'absolute', bottom:0}}/>
            </View>

            <ImageBackground source={require('../imgs/bg4.png')} style={style.container}>
                    <Image style={style.janeImg} source={require('../imgs/Pororo.png')} />
                    <Text style={style.janeTxt}>JANE DOE</Text>

                <View style={style.input}>
                    <FontAwesomeIcon icon='user' size={22} color='white' />
                    <TextInput placeholder="username" placeholderTextColor='grey' style={style.inputTxt}/>
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='envelope' size={22} color='white' />
                    <TextInput placeholder="email" placeholderTextColor='grey' style={style.inputTxt} />
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='lock' size={22} color='white' />
                    <TextInput placeholder="password" placeholderTextColor='grey' style={style.inputTxt} />
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='lock' size={22} color='white' />
                    <TextInput placeholder="confirm password" placeholderTextColor='grey' style={style.inputTxt} />
                </View>
                <View style={style.inputLine}></View>

                <TouchableOpacity style={[style.button, {marginTop:30}]} onPress={()=>(setShowPopUp(!ShowPopUp))}>
                    <Text style={{color:"#0E1617", fontWeight:"bold"}}>Save</Text>
                    {/* <FontAwesomeIcon icon="chevron-right" size={21} color="#929688" style={{position:'absolute', right:10}} /> */}
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={()=>(setShowPopUp2(!ShowPopUp2))}>
                    <Text style={{color:"#9B3F3B", fontWeight:"bold"}}>Add Emergency Contact</Text>
                </TouchableOpacity>

                {saveChanges}
                {emergency}
                
            </ImageBackground>
        </View>
    )
}

export default EditAccount;