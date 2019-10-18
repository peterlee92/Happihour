import React from 'react';
import {View, Text, Button, Switch, Image, TouchableOpacity} from 'react-native';
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/ProfilePageStyle';

function ProfilePage(){
    return(
        <View style={style.container}>
            <View style={style.avatar}>
                <Image style={style.AvatarImg} /*source={require()}*//>
                <Text style={style.name}>Jane Doe</Text>
                <TouchableOpacity>
                    <Text style={style.editProfile}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={style.titleIcon}>
                    <Image style={style.icons}/>
                    <Text style={style.titles}>Edit Emergency Contact</Text>
                </TouchableOpacity>
            </View>

            <View style={style.titleIcon}>
                <Image style={style.icons}/>
                <Text style={style.titles}>Settings</Text>
            </View>
            <View style={style.settings}>
                <Text style={style.options}>Notifications</Text>
                <Switch style={style.swtch}/>
            </View>

            <View style={style.settings}>
                <Text style={style.options}>Location Tracking</Text>
                <Switch style={style.swtch}/>
            </View>

            <View style={style.titleIcon}>
                <Image style={style.icons}/>
                <Text style={style.titles}>Happihour</Text>
            </View>
            <View style={style.titleIcon}></View>
            <TouchableOpacity>
                <Text style={style.options}>Contact Us</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity>
                <Text style={style.options}>FAQ</Text>
            </TouchableOpacity> */}

            <View>
                <TouchableOpacity style={style.titleIcon}>
                    <Image style={style.icons}/>
                    <Text style={style.titles}>Sign Out</Text>
                </TouchableOpacity>
            </View>
            <MenuBar />
        </View>
    )
}

export default ProfilePage;