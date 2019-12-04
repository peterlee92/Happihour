import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground, Linking, AsyncStorage} from 'react-native';
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
        let response = await fetch('http://Happihour-env.punbp2gfmb.us-east-2.elasticbeanstalk.com/Contact.php',{
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

    
    var displayPop = null;
    

    const [lati, setlati] = useState();
    const [lngti, setlngti] = useState();

    async function getInfo(){

        var data = await AsyncStorage.getItem("userinfo");
        data = JSON.parse(data);
        setlati(Number(data.info[0]['latitude']));
        setlngti(Number(data.info[0]['longitude']));
      }


    var handleGetDirections = async() => {

        var data = {
          destination: {
            latitude:lati,
            longitude:lngti 
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
        let response = await fetch('http://Happihour-env.punbp2gfmb.us-east-2.elasticbeanstalk.com/userInfo.php',{
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