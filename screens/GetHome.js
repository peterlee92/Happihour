import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground, Linking, AsyncStorage, Alert} from 'react-native';
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/GetHomeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import AddContact from '../comps/AddContact-popUp';
import Confirmation from '../comps/Confirmation-popUp';
import getDirections from 'react-native-google-maps-directions'


function GetHome(){

    // add contact and confirmation pop up use states
    const [contactPop, setContactPop] = useState(false);
    const [confirmPop, setConfirmPop] = useState(false);

    // for edit account page
    const[ShowPopUp2, setShowPopUp2] = useState(false);
    const [ShowPopUp, setShowPopUp] = useState(false);

    // local storage user info
    const [userid, setUserid] = useState();
    const [userAddress, setUserAddress] = useState();

     // Check database for emergency contact information else prompt add contact pop up
    var CheckUserInfo=async()=>{
        let response = await fetch('https://Contact.php',{
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
            console.log(data[0].contact);
            Linking.openURL('tel:$' + data[0].contact);
        }
    };

    // Add contact pop up
    var displayPop = null;

    if(contactPop == true){
        displayPop = 
        <View style={{width:'100%', height:'100%', position:'absolute',marginTop:100}}>
            <AddContact setConfirmPop={setConfirmPop} setShowPopUp2={setShowPopUp2} setContactPop={setContactPop}/>
        </View>
    } else {
        displayPop = null;
    }

    // Confirmation pop up
    var confirm = null;
    if(confirmPop == true){
        confirm = 
        <View style={{width:'100%', height:'100%', position:'absolute',marginTop:30}}>
            <Confirmation setShowPopUp={setShowPopUp} setConfirmPop={setConfirmPop}/>
        </View>
    } else {
        confirm = null;
    }

   async function getInfo(){
        var data = await AsyncStorage.getItem("userinfo");
        data = JSON.parse(data);
        var id = Number(data.info[0]['user_id']);
        getUserAddress(id);
        console.log("user id: ", id);
      }

      var handleGetDirections = async() => {

        var data = {
          destination: {
            latitude: Number(userAddress[0]),
            longitude: Number(userAddress[1])
          },
          params: [
            {
              key: "travelmode",
              value: "transit"        // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: "navigate"       // this instantly initializes navigation using the given travel mode
            }
          ]
        }
     
        await getDirections(data)
      }
  
  var getUserAddress = async(id)=>{
        let response = await fetch('https://userInfo.php',{
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

            var address = data['address'];
            setUserAddress([Number(data['latitude']), Number(data['longitude'])]);
            console.log("address ", address);

    }
   
    useEffect(()=>{
        getInfo();
        getUserAddress();
    },[]);

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
                    onPress={()=>{handleGetDirections()}}
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
            {confirm}
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