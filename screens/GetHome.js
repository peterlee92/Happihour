<<<<<<< HEAD
<<<<<<< HEAD
import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground, Linking} from 'react-native';
=======
import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground, Linking, AsyncStorage} from 'react-native';
>>>>>>> 0de0a1587e57a6f5f36cd78956ff3e6bf3eae6b5
=======
import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground, Linking, AsyncStorage} from 'react-native';
>>>>>>> 542d1b298602c26c1e04d01f3c4edccd1b47e4be
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/GetHomeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import AddContact from '../comps/AddContact-popUp';


<<<<<<< HEAD
<<<<<<< HEAD

=======
var CheckUserInfo=async()=>{
    let response = await fetch('http://192.168.0.12/Happihour/Contact.php',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: '1'
        })
    })
>>>>>>> 0de0a1587e57a6f5f36cd78956ff3e6bf3eae6b5

=======
>>>>>>> 542d1b298602c26c1e04d01f3c4edccd1b47e4be
function GetHome(){

    const [contactPop, setContactPop] = useState(false);
    const [confirmPop, setConfirmPop] = useState(true);

    // for edit account page
    const[ShowPopUp2, setShowPopUp2] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD
    const[ShowPopUp2, setShowPopUp2] = useState(false);


    var CheckUserInfo=async()=>{
        let response = await fetch('http://142.232.52.8:8888/Happihour/backend/Contact.php',{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    
        let data = await response.json()

        if(data == 'none'){
            setContactPop(true);
        }else {
            Linking.openURL(data);
        }
    };

    var displayPop = null;

    if(contactPop == true){
        displayPop = 
        <View style={{width:'100%', height:'100%', position:'absolute',marginTop:100}}>
            <AddContact setConfirmPop={setConfirmPop} setShowPopUp2={setShowPopUp2}/>
        </View>
    } else {
        displayPop = null;
    }
=======

function GetHome(){
=======
>>>>>>> 542d1b298602c26c1e04d01f3c4edccd1b47e4be

    var CheckUserInfo=async()=>{
        let response = await fetch('http://142.232.52.8:8888/Happihour/backend/Contact.php',{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    
        let data = await response.json()

        if(data == 'none'){
            setContactPop(true);
        }else {
            Linking.openURL(data);
        }
    };

    var displayPop = null;

    if(contactPop == true){
        displayPop = 
        <View style={{width:'100%', height:'100%', position:'absolute',marginTop:100}}>
            <AddContact setConfirmPop={setConfirmPop} setShowPopUp2={setShowPopUp2}/>
        </View>
    } else {
        displayPop = null;
    }
  
   async function getInfo(){
        var data = await AsyncStorage.getItem("userinfo");
        data = JSON.parse(data);
        var id = Number(data.info[0]['user_id']);
        getUserAddress(id);
        console.log("user id: ", id);
      }
  
  var getUserAddress = async(id)=>{
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
            var address = data['address'];
            setUserAddress(address);
            console.log("address ", address);
    
        }   
    }
   
    
    

    useEffect(()=>{
        getInfo();
        getUserAddress();
    },[]);

<<<<<<< HEAD
>>>>>>> 0de0a1587e57a6f5f36cd78956ff3e6bf3eae6b5
=======
>>>>>>> 542d1b298602c26c1e04d01f3c4edccd1b47e4be
    return(
        <View style={style.container}>
            <ImageBackground 
                source={require('../imgs/popupBG2.png')} 
                resizeMode='cover' 
                style={{
                    width:'100%', 
                    height:'100%', 
                    flex:10.5,
                    justifyContent:'center', 
                    alignItems:'center'}}
            >
            <View 
                style={{
                    width:'100%', 
                    height:'100%', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    backgroundColor:'rgba(10,25,31,0.6)', 
                    position:'absolute',
                }}
            >
            <Image 
                source={require('../imgs/Flow_Header.png')}  
                style={{
                    width:'100%', 
                    height:50, 
                    position:'absolute', 
                    top:0
                }} 
            />
            
            <Text style={[style.GHS, {marginBottom:30}]}>Let's Get You Home Safe</Text>
            <View style={style.rows}>
                <TouchableOpacity 
                    style={[
                        style.position, 
                        {backgroundColor:'#0C519F'
                    }]} 
                    onPress={()=>(Actions.transit())}
                >
                    <View style={style.img}>
                        <Image style={{width:100, height:100}} source={require('../imgs/home-icon-silhouette.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={style.subGHS}>Get Home</Text>
{/* 
                <TouchableOpacity style={[style.position, {backgroundColor:'#D1C74B'}]} onPress={()=>(Actions.taxi())}>
                    <View style={style.img2}>
                        <FontAwesomeIcon icon="taxi" size={100} color="white" style={style.Img2}/>
                    </View>
                    <Text style={style.GHS}>TAXI</Text>
                </TouchableOpacity> */}
            </View>
            <View style={style.rows}>
                <TouchableOpacity 
                    onPress={()=>{CheckUserInfo()}}
                    style={[
                        style.position, 
                        {backgroundColor:'#BF3B37',
                        marginTop:50
                    }]}
                >
                    <View style={style.img3}>
                        <Image style={{width:100, height:100}} source={require('../imgs/emergency.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={[style.subGHS, {marginBottom:-15}]}>Emergency Contact</Text>
            </View>
            </View>
            </ImageBackground>
            {displayPop}
            <MenuBar 
                map='#74726C'
                home='#F4B869'
                fav='#74726C'
                profile='#74726C'
            />
        </View>
    )
}

export default GetHome;