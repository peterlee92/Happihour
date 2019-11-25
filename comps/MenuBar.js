import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/MenuBarStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

function MenuBar(props){
 
    var mapIcon = props.map;
    var getHomeIcon = props.home;
    var favIcon = props.fav;
    var profileIcon = props.profile;
    
    return(
        <View style={style.barPosition}>
            <TouchableOpacity
                onPress={()=>(Actions.mappage())}
            >
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <FontAwesomeIcon 
                        icon="map-marker-alt" 
                        color={mapIcon} size={32} 
                        style={style.ImgSize}
                    />
                    <Text style={{color:mapIcon, fontSize:10}}>MAP</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                  onPress={()=>(Actions.getHome())}
            >
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <FontAwesomeIcon 
                        icon="bus-alt" 
                        color={getHomeIcon} 
                        size={32} 
                        style={style.ImgSize}
                    />
                    <Text style={{color:getHomeIcon, fontSize:10}}>GET HOME</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                  onPress={()=>(Actions.favPage())}
            >
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <FontAwesomeIcon 
                        icon="heart" 
                        color={favIcon} 
                        size={32} 
                        style={style.ImgSize}
                    />
                    <Text style={{color:favIcon, fontSize:10}}>FAVOURITES</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={()=>(Actions.profile())}
            >
                <View style={style.ItemPosition}>
                    <Image style={style.ImgSize} /*source={require()}*//>
                    <FontAwesomeIcon 
                        icon="user-circle" 
                        color={profileIcon} 
                        size={32} 
                        style={style.ImgSize}
                    />
                    <Text style={{color:profileIcon, fontSize:10}}>PROFILE</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MenuBar;