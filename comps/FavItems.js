import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/FavItemsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function FavItems(name, descr, img, count) {
    return(
        <TouchableOpacity style={style.position}>
            <View style={style.container}>
                <View style={style.imgPosition}>
                    <Image source={require('../imgs/colony1.png')} style={style.img}/>
                    <Image source={require('../imgs/colony2.png')} style={style.img2}/>
                    <View style={style.favImg}>
                        <Text style={{marginHorizontal:1}}>12</Text>
                        <FontAwesomeIcon icon='heart' size={12} style={{marginHorizontal:1}}/>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View>
                        <Text style={style.favTitle}>The Cascade Room</Text>
                        <Text style={style.favDescr}>2616 Main St Vancouver, BC V5T 3E6</Text>
                    </View>
                    <View>
                        <FontAwesomeIcon icon="chevron-right" color={'#ffef86'} size={32} style={{marginRight:12}}/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default FavItems;