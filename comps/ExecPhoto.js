import React, {Component, useState} from 'react';
import {View, Image, TouchableOpacity,Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ImagePicker from 'react-native-image-picker';

import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

function ExecPhoto(){
  // Click Edit to display delete button
  const [del, showDel] = useState(false);
  var delBtn = null;
  var editBtn = "EDIT";
  if(del == true){
      delBtn = (
        <TouchableOpacity
        style={{position:"absolute",right:-10,bottom:-10}}>
        <FontAwesomeIcon icon='minus' transform="shrink-5" size={30} color="#FFFFFF" style={btnStyles.removeBtn}/>
</TouchableOpacity>
      )
      editBtn = "DONE";
  }else{
      delBtn = null;
  }

  const options = {
    title: 'Select Photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const [imgUri, setImgUri] = useState("");
  
  var img = "../imgs/colony1.png";
  function ImgPick(){
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
        <View style={styles.container}>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={[styles.heading6,{flex:2, color:"#FFD96F"}]}>PHOTO</Text>
            <TouchableOpacity
                onPress={()=>(
                    showDel(!del)
                )}
            >
            <Text style={styles.overline}>{editBtn}</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.imgRow}>
            <View>
                <Image
                    style={styles.img}
                    source={require('../imgs/colony1.png')}
                    />                
                {delBtn}
            </View>
            <View>
                <Image
                    style={styles.img}
                    source={require('../imgs/colony1.png')}
                    />                
                    {delBtn}
            </View>
        </View>
        <View style={styles.imgRow}>
            <View>
                <Image
                style={styles.img}
                source={{uri: 'http://via.placeholder.com/175x100'}}
                />                
                <TouchableOpacity
                        onPress={ImgPick}
                        style={{position:"absolute",right:-10,bottom:-10}}>
                        <FontAwesomeIcon icon='plus' transform="shrink-5" size={30} color="#FFFFFF" style={btnStyles.addBtn}/>
                </TouchableOpacity>                
            </View>
            <View>
                <Image
                style={styles.img}
                source={{uri: 'http://via.placeholder.com/175x100'}}
                />                
                <TouchableOpacity
                        onPress={ImgPick}
                        style={{position:"absolute",right:-10,bottom:-10}}>
                        <FontAwesomeIcon icon='plus' transform="shrink-5" size={30} color="#FFFFFF" style={btnStyles.addBtn}/>
                </TouchableOpacity>                
            </View>

    </View>
             {/* Save Button */}
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
        
    )
}

export default ExecPhoto;
