import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image, AsyncStorage} from 'react-native';
import AccountChanges from '../comps/AccountChanges-popUp';
import style from '../styles/ScreenStyles/EditAccount-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import AddContact from '../comps/AddContact-popUp';

function EditAccount(props){
    const [userid, setUserid] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const[address, setUserAddress] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [Imgurl, setImgurl] = useState();
  
    const[ShowPopUp, setShowPopUp] = useState(false);

    var saveChanges = null;

    if(ShowPopUp == true){
        saveChanges = <AccountChanges setShowPopUp={setShowPopUp}/>
    } else{
        saveChanges = null;
    }


    const[ShowPopUp2, setShowPopUp2] = useState(false);

    // for get home page
    const [confirmPop, setConfirmPop] = useState(true);
    const [contactPop, setContactPop] = useState(false);

    var emergency = null;

    if(ShowPopUp2 == true){
        emergency = <AddContact setShowPopUp2={setShowPopUp2} setConfirmPop={setConfirmPop} setContactPop={setContactPop}/>
    } else{
        emergency = null;
    }

    var saved = null;

    async function getInfo(){
        var data = await AsyncStorage.getItem("userinfo");
        data = JSON.parse(data);
        var id = data.info[0]['user_id'];
        setUserid(id);
        console.log("get user id:", id);
        setUsername(data.info[0]['user_name']);
        getUserInfo(id);
      }
    
      async function getPhoto(){
        var img = await AsyncStorage.getItem("userphoto");
        img = JSON.parse(img);
        setImgurl(img);
        console.log("get photo",img);
      }

      var getUserInfo = async(id)=>{
        let response = await fetch('http://192.168.0.12/Happihour/userInfo.php',{
            method:'POST',
            headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id : id
            })
        })
                                    
        let data = await response.json()
    
        if(data == 'Your information is incorrect'){
            Alert.alert(data);
        }else {
            setUsername(data['username']);
            setEmail(data['email']);
            setUserAddress(data['address']);
            setPassword(data['password']);
        }   
    }

    var updateUserInfo = async(id)=>{
        let response = await fetch('http://192.168.0.12/Happihour/updateUserInfo.php',{
            method:'POST',
            headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id : id,
                username: username,
                email: email,
                address: address,
                password: password,
                confirmpassword: confirmPass
            })
        })
                                    
        let data = await response.json()
    
        if(data == 'Your information is incorrect'){
            Alert.alert(data);
        }else {
            Alert.alert(data);
        }   
    }



      useEffect(()=>{
        getInfo();
        getPhoto();
        getUserInfo();
    },[]);

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
                <Image style={style.janeImg} source={Imgurl} />
                <Text style={style.janeTxt}>{username}</Text>

                <View style={style.input}>
                    <FontAwesomeIcon icon='user' size={22} color='white' />
                    <TextInput
                      placeholder="username"
                      placeholderTextColor="#f4e664"
                      style={style.inputTxt}
                      onChangeText={(t) => {
                          setUsername(t);}}
                      value={username}/>
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='envelope' size={22} color='white' />
                    <TextInput
                      placeholder="email" 
                      placeholderTextColor="#f4e664"
                      style={style.inputTxt} 
                      onChangeText={(t) => {
                        setEmail(t);}}                      
                      value={email}
                      />
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='home' size={22} color='white' />
                    <TextInput
                      placeholder="address" 
                      placeholderTextColor="#f4e664"
                      style={style.inputTxt} 
                      onChangeText={(t) => {
                        setUserAddress(t);}}                      
                      value={address}
                      />
                </View>
                <View style={style.inputLine}></View>                

                <View style={style.input}>
                    <FontAwesomeIcon icon='lock' size={22} color='white' />
                    <TextInput
                      secureTextEntry
                      placeholder="password"
                      placeholderTextColor="#f4e664"                   
                      style={style.inputTxt}
                      onChangeText={(t) => {
                        setPassword(t);}}   
                      />
                </View>
                <View style={style.inputLine}></View>

                <View style={style.input}>
                    <FontAwesomeIcon icon='lock' size={22} color='white' />
                    <TextInput
                        secureTextEntry
                      placeholder="confirm password"
                      placeholderTextColor="#f4e664"
                      style={style.inputTxt}
                      onChangeText={(t) => {
                        setConfirmPass(t);}}
                    />
                </View>
                <View style={style.inputLine}></View>

                <TouchableOpacity style={[style.button, {marginTop:30}]} onPress={()=>{
                                                                                  setShowPopUp(!ShowPopUp)
                                                                                  updateUserInfo()
                                                                                  }}>
                    <Text style={{color:"black", fontFamily:'Nunito-Bold', fontSize:20}}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={()=>(setShowPopUp2(!ShowPopUp2))}>
                    <Text style={{color:"#9B3F3B", fontFamily:'Nunito-Bold', fontSize:20}}>Add Emergency Contact</Text>
                </TouchableOpacity>

                {saveChanges}
                {emergency}
                {saved}
                
            </ImageBackground>
        </View>
    )
}

export default EditAccount;