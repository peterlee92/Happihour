import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/ListItemsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Actions } from 'react-native-router-flux';

function FavItems(props) {

    var Image1 = {uri:props.img1}
    var Image2 = {uri:props.img2}

    return(
        <View style={style.position}>
            <View style={style.container}>
                <View style={style.imgPosition}>
                    <Image 
                        source={Image1}
                        style={style.img}
                    />
                    <Image 
                        source={Image2} 
                        style={style.img2}
                    />
                    
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