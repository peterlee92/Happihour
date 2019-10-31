import React from 'react';
import {View, Text, Button, Switch, Image, TouchableOpacity, ImageBackground} from 'react-native';
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/ProfilePageStyle';

//icons and symbols 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

//react native elements import for things such as editable avatar, search bars, and checkboxes
import {Avatar} from 'react-native-elements';
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Router api
import {Actions} from 'react-native-router-flux';

function ProfilePage(){
    return(
        <View style={style.container}>
            <ImageBackground source={require('../imgs/ProfileGrad.png')} style={style.container}>
                <View style={style.avatar}>
                {/* <Avatar source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',}} showEditButton/> */}
                    <Image source={require('../imgs/bg1.png')} style={{width:500, height:300, position:"absolute", borderBottomRightRadius:300, borderBottomLeftRadius:300}}/>
                    <Image style={style.AvatarImg} source={require('../imgs/Pororo.png')} />
                    <Text style={style.name}>Jane Doe</Text>
                    <Text style={style.atName}>@JaneDoe</Text>
                </View>

            <TouchableOpacity style={style.titleIcon} onPress={()=>(Actions.editAccount())}>
                <View style={style.editBox}>
                    <Text style={style.titles}>Edit Account</Text>
                    <FontAwesomeIcon icon="chevron-right" size={24} color={"white"} style={{marginRight:10}} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>(Actions.contactUs())}>
                <View style={style.editBox}>
                    <Text style={style.titles}>Contact Us</Text>
                    <FontAwesomeIcon icon="chevron-right" size={24} color={"white"} style={{marginRight:10}}/>
                </View>
            </TouchableOpacity>

            <View style={style.settings}>
                <Text style={style.options}>Location</Text>
                <Switch style={style.swtch} thumbColor='black' ios_backgroundColor='rgba(0,0,0,0.5)'/>
            </View>

            <TouchableOpacity style={style.titleIcon}>
                <View style={style.SignOutbox}>
                    <Text style={style.SignOutTitles}>Sign Out</Text>
                </View>
            </TouchableOpacity>
            <MenuBar />
            </ImageBackground>
        </View>
    )
}

export default ProfilePage;