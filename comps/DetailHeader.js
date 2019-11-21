import React, {useState, useEffect} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, Linking} from 'react-native';
import styles from '../styles/CompStyles/DetailheaderStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


function DetailHeader (props){

    const [FavStatus, setFavStatus] = useState(false);

    var AddFav=async()=>{
        let Favresponse = await fetch('http://142.232.146.164/Happihour/AddFav.php',{
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

    var DeleteFav=async()=>{
        let Favresponse = await fetch('http://142.232.146.164/Happihour/DeleteFav.php',{
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

    

    return(
        <ImageBackground 
            style={styles.container}
            source={require('../imgs/colony.png')}
        >
            
            <View style={styles.RSContainer}>  
                <Text style={styles.RSname}>{props.text}</Text>
                <FontAwesomeIcon icon='times-circle' color={'#e6dc60'} size={25} style={{position:'absolute', right:10, top:15}}/>
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
