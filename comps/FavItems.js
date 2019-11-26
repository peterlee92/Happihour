import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/FavItemsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from '../styles/AppStyle';

function FavItems({name, address}) {

    var DeleteFav=async()=>{
        let Favresponse = await fetch('http://192.168.0.12/Happihour/DeleteFav.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id:$obj['user_id'],
                restaurantname:{name}
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
                    <TouchableOpacity style={style.favImg} onPress={()=>{DeleteFav()}}>
                        <FontAwesomeIcon 
                            icon='heart' 
                            size={22} 
                            color='white'
                        /> 
                    </TouchableOpacity>
                </View>
                    <TouchableOpacity 
                        style={style.favContainer}
                    >
                        <View>
                            <Text style={style.favTitle}>{name}</Text>
                            <Text style={style.favDescr}>{address}</Text>
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