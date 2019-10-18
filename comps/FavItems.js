import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/FavItemsStyles';

function FavItems(name, descr, img, count) {
    return(
        <TouchableOpacity style={style.position}>
            <View style={style.container}>
                <View style={style.imgPosition}>
                    <Image style={style.img}/>
                    <Image style={style.img}/>
                </View>
                <View>
                    <Text style={style.favTitle}>The Cascade Room</Text>
                <View >
                    <View style={style.imgPosition}>
                        <Text style={style.favDescr}>12</Text>
                        <Image style={style.favImg} source={require('../DigitalAssets/Icons/FavouriteIcons/fav_icon2.png')}/>
                    </View>
                    <Text style={style.favDescr}>Happy Hour: Monday - Sunday  •  4pm - 6pm</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default FavItems;