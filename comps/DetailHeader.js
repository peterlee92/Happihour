import React, {useState, useEffect} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, Linking} from 'react-native';
import styles from '../styles/CompStyles/DetailheaderStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';


function DetailHeader (props){

    const [FavStatus, setFavStatus] = useState(false);

    var AddFav=async()=>{
        let Favresponse = await fetch('http://142.232.156.7/Happihour/AddFav.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id:'1',
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
        let Deleteresponse = await fetch('http://142.232.156.7/Happihour/DeleteFav.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id:'1',
                restaurantname:props.text
            })
        })
    }

    //favourtie icon check function
    var CheckFav=async()=>{
        let Checkresponse = await fetch('http://142.232.156.7/Happihour/CheckFav.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id:'1',
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
                <FontAwesomeIcon icon='heart' color={'white'} opacity={.9} size={40} />
            </TouchableOpacity>
        )
    }else{
        FavIcon = (
            <TouchableOpacity 
                style={{position:'absolute', right:20, bottom:70}}
                onPress={()=>{
                    setFavStatus(false)
                    DeleteFav()
                }}
            >
                <FontAwesomeIcon icon='heart' color={'red'} size={40} />
            </TouchableOpacity>
        )
    } 

    useEffect(()=>{
        CheckFav();
    },[])

    return(
        <ImageBackground 
            style={styles.container}
            source={require('../imgs/colony.png')}
        >
            
            <View style={styles.RSContainer}>  
                <Text style={styles.RSname}>{props.text}</Text>
                <TouchableOpacity 
                    style={{position:'absolute', right:10, top:15}}
                    onPress={()=>{Actions.pop()}}
                >
                <FontAwesomeIcon icon='times-circle' color={'#e6dc60'} size={25} />
                </TouchableOpacity> 
            </View>

            <View style={styles.directionContainer}>
                <TouchableOpacity style={styles.directionBut}>
                    <FontAwesomeIcon icon='directions' size={20} color={'black'} style={{marginRight:5}}/>
                    <Text>GET DIRECTIONS</Text>
                </TouchableOpacity>
            </View>

            {FavIcon}    
        
            <View style={styles.HTcontainer}>
                <Text style={styles.HT}>DAILY FROM 3:00PM - 5:00PM</Text>    
            </View>
        </ImageBackground>
    )
}

export default DetailHeader;
