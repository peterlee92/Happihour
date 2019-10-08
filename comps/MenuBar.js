import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

function MenuBar(){
    return(
        <View style={}>
            <TouchableOpacity onPress={()=>{}}>
                <View style={}>
                    <Image style={} source={require('../Mockups + Comps/Icons/Nav Bar Icons/Greyed Icons/location_icon.png')}/>
                    <Text style={}>Map</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
                <View style={}>
                    <Image style={""} source={require('../Mockups + Comps/Icons/Nav Bar Icons/Greyed Icons/list_icon.png')}/>
                    <Text style={}>List</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
                <View style={}>
                    <Image style={""} source={require('../Mockups + Comps/Icons/Nav Bar Icons/Greyed Icons/car_icon.png')}/>
                    <Text style={}>Transport</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
                <View style={}>
                    <Image style={""} source={require('../Mockups + Comps/Icons/Nav Bar Icons/Greyed Icons/fav_icon.png')}/>
                    <Text style={}>Favourites</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MenuBar;