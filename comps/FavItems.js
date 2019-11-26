import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/FavItemsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from '../styles/AppStyle';
import {Actions} from 'react-native-router-flux';

function FavItems(props) {

    var DeleteFav=async()=>{
        let Deleteresponse = await fetch('http://142.232.152.36/Happihour/DeleteFav.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id:'1',
                restaurantname:props.name
            })
        })
    }


    return(
        <View style={style.position}>
            <View style={style.container}>
                <View style={style.imgPosition}>
                    <Image 
                        source={require('../imgs/colony1.png')}
                        style={style.img}
                    />
                    <Image 
                        source={require('../imgs/colony2.png')} 
                        style={style.img2}
                    />
                    <TouchableOpacity 
                    style={style.favImg}
                    onPress={()=>{
                        props.SetRefresh(!props.Refresh)
                        DeleteFav()
                    }}>
                        <FontAwesomeIcon icon='heart' color={'red'} size={22} />
                    </TouchableOpacity>
                </View>
                    <TouchableOpacity 
                        style={style.favContainer}
                        onPress={()=>Actions.detail({text:props.name})}
                    >
                        <View>
                            <Text style={style.favTitle}>{props.name}</Text>
                            <Text style={style.favDescr}>{props.address}</Text>
                        </View>
                        <View>
                            <FontAwesomeIcon 
                                icon="chevron-right" 
                                color={'#ffef86'} 
                                size={22} 
                                style={{marginRight:10}}/>
                        </View>
                    </TouchableOpacity>
            </View>
            
        </View>
    )
}
export default FavItems;