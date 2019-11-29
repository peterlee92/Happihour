
import React, {useEffect, useState} from 'react';
import {View, Text, Button, Switch, Image, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/ProfilePageStyle';

//icons and symbols 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

//Router api
import {Actions} from 'react-native-router-flux';

// avatar imge picker
import ImagePicker from 'react-native-image-picker';

import localdata from '../localstorage.json';

function ProfilePage(){
  const [username, setUsername] = useState();
  const [userid, setUserid] = useState();
  const [Imgurl, setImgurl] = useState();
  
  async function getInfo(id, name){
    var data = await AsyncStorage.getItem("userinfo");
    data = JSON.parse(data);
    setUserid(data.info[0]['user_id']);
    setUsername(data.info[0]['user_name']);
  }

  async function getPhoto(){
    var img = await AsyncStorage.getItem("userphoto");
    img = JSON.parse(img);
    setImgurl(img);
    console.log("get photo",img);
  }

  async function signOut(){
    await AsyncStorage.removeItem("userinfo");
    await AsyncStorage.removeItem("userphoto");
    var data = await AsyncStorage.getItem("userinfo");
    console.log("clear storage", data);
    Actions.login();
  }

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  function ImgPick(){
    /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info in the API Reference)
   */
  ImagePicker.showImagePicker(options, (response) => {
    // console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };
  
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      console.log("img source", source)
      setImgurl(source);
      // setProfilePhoto(source);
      AsyncStorage.setItem("userphoto", JSON.stringify(source));
    }
  });   
  }

    useEffect(()=>{
        getInfo();
        getPhoto();
    },[]);
    return(
        <View style={style.container}>
                <View style={style.avatar}>
                        <Image source={require('../imgs/profileCurvedImage.png')} resizeMode='cover' style={{width:'100%', height:'100%', position:"absolute", overflow:'hidden'}}/>
                        <View style={{justifyContent:'center', alignItems:'center', marginTop:-50}}>
                        <TouchableOpacity onPress={ImgPick} >
                          <Image style={style.AvatarImg} source={Imgurl} />
                          </TouchableOpacity>
                          {/* <Image source={avatarSource} style={style.AvatarImg}/> */}
                          <Text style={style.name}>
                            {username}
                          </Text>
                          <Text style={style.atName}>@{username}</Text>

                        </View>
                </View>

                <Image source={require('../imgs/Flow_Header.png')} style={{width:'100%', height:50, position:'absolute', top:0}} />
            <Image source={require('../imgs/profile_flowBG.png')} style={{width:'100%', flex:6, height:400, position:'absolute', bottom:-50}} />
            <View style={{justifyContent:'center', alignItems:'center', flex:4}}>
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

              <TouchableOpacity style={style.titleIcon}
                 onPress={signOut}
              >
                  <View style={style.SignOutbox}>
                      <Text style={style.SignOutTitles}>Sign Out</Text>
                  </View>
              </TouchableOpacity>
            </View>
            {/* </ImageBackground> */}
            <MenuBar
            map='#74726C'
            home='#74726C'
            fav='#74726C'
            profile='#F4B869' />
        </View>
    )
}

export default ProfilePage;