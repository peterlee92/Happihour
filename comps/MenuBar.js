import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/MenuBarStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function MenuBar(){
    return(
        <View style={style.barPosition}>
            <TouchableOpacity>
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <FontAwesomeIcon icon="map-marker-alt" color={'dimgrey'} size={32} style={style.ImgSize}/>
                    <Text style={style.MenuText}>MAP</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <FontAwesomeIcon icon="bus-alt" color={'dimgrey'} size={32} style={style.ImgSize}/>
                    <Text style={style.MenuText}>GET HOME</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <FontAwesomeIcon icon="heart" color={'dimgrey'} size={32} style={style.ImgSize}/>
                    <Text style={style.MenuText}>FAVOURITES</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <FontAwesomeIcon icon="user-circle" color={'dimgrey'} size={32} style={style.ImgSize}/>
                    <Text style={style.MenuText}>PROFILE</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MenuBar;