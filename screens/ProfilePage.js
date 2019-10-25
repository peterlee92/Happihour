import React from 'react';
import {View, Text, Button, Switch, Image, TouchableOpacity, ImageBackground} from 'react-native';
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/ProfilePageStyle';

//icons and symbols 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

//react native elements import for things such as editable avatar, search bars, and checkboxes
import {Avatar} from 'react-native-elements';
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function ProfilePage(){
    return(
        <View style={style.container}>
                <View style={style.avatar}>
                {/* <Avatar source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',}} showEditButton/> */}
                    <Image source={require('../imgs/bg1.png')} style={{width:525, height:250, position:"absolute", borderBottomRightRadius:300, borderBottomLeftRadius:300}}/>
                    <Image style={style.AvatarImg} source={require('../imgs/Pororo.png')}/>
                    <Text style={style.name}>Jane Doe</Text>
                </View>

            <TouchableOpacity style={style.titleIcon}>
                <View style={style.editBox}>
                    <Text style={style.titles}>Edit Account</Text>
                    <FontAwesomeIcon icon="arrow-right" size={24} color={"white"} style={{marginRight:10}} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={style.editBox}>
                    <Text style={style.titles}>Contact Us</Text>
                    <FontAwesomeIcon icon="arrow-right" size={24} color={"white"} style={{marginRight:10}}/>
                </View>
            </TouchableOpacity>

            <View style={style.settings}>
                <Text style={style.options}>Location Tracking</Text>
                <Switch style={style.swtch} thumbColor='black' ios_backgroundColor='rgba(0,0,0,0.5)'/>
            </View>

            <TouchableOpacity style={style.titleIcon}>
                <View style={style.SignOutbox}>
                    <Text style={style.SignOutTitles}>Sign Out</Text>
                </View>
            </TouchableOpacity>
            <MenuBar />
        </View>
    )
}

export default ProfilePage;