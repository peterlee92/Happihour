import React, {useState, useEffect} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, Linking, AsyncStorage} from 'react-native';
import styles from '../styles/CompStyles/DetailheaderStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import getDirections from 'react-native-google-maps-directions'


function DetailHeader (props){

    const [FavStatus, setFavStatus] = useState(false);
    const [Userid, setUserid] = useState();
    const [latlng, setlatlng] = useState([]);
    const [imgurl, setimgurl] = useState();
    const [Happyhour, setHappyhour] = useState();

    var GrabInfo=async()=>{
        console.log('work')
        let locationresponse = await fetch('http://Happihour-env.punbp2gfmb.us-east-2.elasticbeanstalk.com/Info.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                restaurantname:props.text
            })
        })

        let data = await locationresponse.json();
        setlatlng([data.latitude, data.longtitude]);
        console.log(latlng)
        console.log(data.img1)
        setimgurl({uri:data.img1})
        setHappyhour(data.happyhours)
        
    } 
 
    var handleGetDirections = async() => {

        var data = {
          destination: {
            latitude: Number(latlng[0]),
            longitude: Number(latlng[1])
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

   

      async function getInfo(){
        var data = await AsyncStorage.getItem("userinfo");
        data = JSON.parse(data);
        const id = data.info[0]['user_id'];
        CheckFav(id)
        setUserid(id)
        console.log('userid', Userid)
      }

    var AddFav=async()=>{
        let Favresponse = await fetch('http://Happihour-env.punbp2gfmb.us-east-2.elasticbeanstalk.com/AddFav.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id:Userid,
                restaurantname:props.text
            })
        })
        .then(data=>{
            console.log(data)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    var DeleteFav=async()=>{
        let Deleteresponse = await fetch('http://Happihour-env.punbp2gfmb.us-east-2.elasticbeanstalk.com/DeleteFav.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id:Userid,
                restaurantname:props.text
            })
        })
    }

    //favourtie icon check function
    var CheckFav=async(id)=>{
        let Checkresponse = await fetch('http://Happihour-env.punbp2gfmb.us-east-2.elasticbeanstalk.com/CheckFav.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id:id,
                restaurantname:props.text
            })
        })

        let data = await Checkresponse.json();
        console.log(data);
            if(data == 'yes'){
                setFavStatus(true);
            }else if(data == 'no'){
                setFavStatus(false);
            }
    
    }

    

    var FavIcon = null;
    if(FavStatus == false){
        FavIcon = (
            <TouchableOpacity 
                style={{position:'absolute', right:20, bottom:70}}
                onPress={()=>{
                    setFavStatus(true)
                    AddFav()
                }}
            >
                <View style={{        
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:'#E03A2F',
                    borderRadius:25,
                    width:50,
                    height:50,
                    paddingTop:3}}>
                    <FontAwesomeIcon icon='heart' color={'white'} opacity={.9} size={35} />
                </View>
            </TouchableOpacity>
        )
    }else{
        FavIcon = (
            <TouchableOpacity 
                style={{position:'absolute', right:20, bottom:70}}
                onPress={()=>{
                    setFavStatus(false)
                    DeleteFav()
                }}>
                    <FontAwesomeIcon icon='heart' color={'red'} size={50} />
            </TouchableOpacity>
        )
    } 

    useEffect(()=>{
        GrabInfo()
        getInfo()
    },[])

    return(
        <ImageBackground 
            style={styles.container}
            source={imgurl}
        >
            <View style={[styles.container, {backgroundColor:'rgba(0,0,0,0.4)'}]}>
            <View style={styles.RSContainer}>
                <Text style={styles.RSname}>{props.text}</Text>  
                <TouchableOpacity 
                    style={{position:'absolute', right:10, top:15}}
                    onPress={()=>{Actions.pop()}}
                >
                <FontAwesomeIcon icon='times-circle' color={'#F8D97E'} size={25} />
                </TouchableOpacity> 
            </View>

            <View style={styles.directionContainer}>
                <TouchableOpacity style={styles.directionBut} onPress={()=>{handleGetDirections()}}>
                    <FontAwesomeIcon icon='directions' size={20} color={'black'} style={{marginRight:5}}/>
                    <Text>GET DIRECTIONS</Text>
                </TouchableOpacity>
            </View>

            {FavIcon}    
        
            <View style={styles.HTcontainer}>
                <Text style={styles.HT}>{Happyhour}</Text>    
            </View>
            </View>
        </ImageBackground>
    )
}

export default DetailHeader;
