import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../styles/CompStyles/MenuBarStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

function MenuBar(){

    const [SelectOption, setSelectOption] = useState(0);


    var mapIcon = '#F4B869';
    var getHomeIcon = '#74726C';
    var favIcon = '#74726C';
    var profileIcon = '#74726C';


if(SelectOption === 0 || 1 || 2 || 3 || 4){
    if(Actions.currentScene == 'map'){
        mapIcon = '#F4B869';
        getHomeIcon = '#74726C';
        favIcon = '#74726C';
        profileIcon = '#74726C';
    } else
    if(Actions.currentScene == 'getHome'){
        mapIcon = '#74726C';
        getHomeIcon = '#F4B869';
        favIcon = '#74726C';
        profileIcon = '#74726C';
    } else
    if(Actions.currentScene == 'favPage'){
        mapIcon = '#74726C';
        getHomeIcon = '#74726C';
        favIcon = '#F4B869';
        profileIcon = '#74726C';
    } else
    if(Actions.currentScene == 'profile'){
        mapIcon = '#74726C';
        getHomeIcon = '#74726C';
        favIcon = '#74726C';
        profileIcon = '#F4B869';
    }
}
    
    return(
        <View style={style.barPosition}>
            <TouchableOpacity
                onPress={()=>([Actions.mappage(), setSelectOption(1)])}
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
                  onPress={()=>([Actions.getHome(), setSelectOption(2)])}
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
                  onPress={()=>([Actions.favPage(), setSelectOption(3)])}
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
                onPress={()=>([Actions.profile(), setSelectOption(4)])}
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