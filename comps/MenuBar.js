import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/MenuBarStyle';

function MenuBar(){
    return(
        <View style={style.barPosition}>
            <TouchableOpacity>
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <Text style={style.MenuText}>Map</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <Text style={style.MenuText}>Get Home</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <Text style={style.MenuText}>Favourites</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <Text style={style.MenuText}>Profile</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MenuBar;