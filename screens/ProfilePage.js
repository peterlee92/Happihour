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

// avatar imge picker
import ImagePicker from 'react-native-image-picker';

function ProfilePage(){

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
    console.log('Response = ', response);
  
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
  
      this.setState({
        avatarSource: source,
      });
    }
  });   
  }

    return(
        <View style={style.container}>
            <ImageBackground source={require('../imgs/ProfileGrad.png')} style={style.container}>
                <View style={style.avatar}>
                    {/* <ImageBackground source={require('../imgs/profileCurvedImage.png')} resizeMode='cover' style={{width:'100%', height:410, borderBottomLeftRadius:350, borderBottomRightRadius:350, overflow:'hidden'}}> */}
                    {/* <Avatar source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',}} showEditButton/> */}
                        <Image source={require('../imgs/profileCurvedImage.png')} resizeMode='cover' style={{width:'100%', height:'100%', position:"absolute", borderBottomLeftRadius:350, borderBottomRightRadius:350, overflow:'hidden'}}/>
                        <Image style={style.AvatarImg} source={require('../imgs/Pororo.png')} />
                        <TouchableOpacity /*onPress={ImgPick}*/ style={{position:'absolute', right:280,  top:200}}>
                            <View style={{width:30, height:30, backgroundColor:'#808080', borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                                <FontAwesomeIcon icon='pen' color='#F4B869'/>
                            </View>
                        </TouchableOpacity>
                        <Text style={style.name}>Jane Doe</Text>
                        <Text style={style.atName}>@JaneDoe</Text>
                    {/* </ImageBackground> */}
                </View>

                <Image source={require('../imgs/Flow_Header.png')} style={{width:'100%', height:75, position:'absolute', top:0}} />

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