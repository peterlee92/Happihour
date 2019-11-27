import React, {useState} from 'react';
import {View, Text, Button, Switch, Image, TouchableOpacity, ImageBackground} from 'react-native';
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/ProfilePageStyle';

//icons and symbols 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

//Router api
import {Actions} from 'react-native-router-flux';

// avatar imge picker
import ImagePicker from 'react-native-image-picker';

function ProfilePage(){

  const [Imgurl, setImgurl] = useState();

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
      console.log("work",source)
      setImgurl(source);
    }
  });   
  }

    return(
        <View style={style.container}>
            <ImageBackground source={require('../imgs/ProfileGrad.png')} style={style.container}>
                <View style={style.avatar}>
                        <Image source={require('../imgs/profileCurvedImage.png')} resizeMode='cover' style={{width:'100%', height:'100%', position:"absolute", borderBottomLeftRadius:350, borderBottomRightRadius:350, overflow:'hidden'}}/>
                        <View style={{justifyContent:'center', alignItems:'center', marginTop:-50}}>
                          <Image style={style.AvatarImg} source={Imgurl} />
                          
                          {/* <Image source={avatarSource} style={style.AvatarImg}/> */}
                          <TouchableOpacity onPress={ImgPick} style={{position:'absolute', right:45,  top:130}}>
                              <View style={{width:30, height:30, backgroundColor:'#808080', borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                                  <FontAwesomeIcon icon='pen' color='#F4B869'/>
                              </View>
                          </TouchableOpacity>
                          <Text style={style.name}>Jane Doe</Text>
                          <Text style={style.atName}>@JaneDoe</Text>
                        </View>
                </View>

                <Image source={require('../imgs/Flow_Header.png')} style={{width:'100%', height:50, position:'absolute', top:0}} />
            <View style={{justifyContent:'center', alignItems:'center', marginBottom:-80}}>
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

              {/* <View style={style.settings}>
                  <Text style={style.options}>Location</Text>
                  <Switch style={style.swtch} thumbColor='black' ios_backgroundColor='rgba(0,0,0,0.5)'/>
              </View> */}

              <TouchableOpacity style={style.titleIcon}>
                  <View style={style.SignOutbox}>
                      <Text style={style.SignOutTitles}>Sign Out</Text>
                  </View>
              </TouchableOpacity>
            </View>
            </ImageBackground>
            <MenuBar
            map='#74726C'
            home='#74726C'
            fav='#74726C'
            profile='#F4B869' />
        </View>
    )
}

export default ProfilePage;