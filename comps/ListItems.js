import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/ListItemsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Actions } from 'react-native-router-flux';

function FavItems(props) {

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
                </View>
                    <TouchableOpacity 
                        style={style.favContainer}
                        onPress={()=>{Actions.detail({text:props.name})}}
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