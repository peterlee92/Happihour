import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

function MenuBar(){
    return(
        <View style={}>
            // setChangePage is usestate that will change the page based on
            // the passed in value from event. usestate is located on app.js
            <TouchableOpacity onPress={()=>{
                setChangePage(ChangePage = 1);
            }}>
                <View style={}>
                    <Image style={} source={require('../Mockups + Comps/Icons/Nav Bar Icons/Greyed Icons/location_icon.png')}/>
                    <Text style={}>Map</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                setChangePage(ChangePage = 3);
            }}>
                <View style={}>
                    <Image style={""} source={require('../Mockups + Comps/Icons/Nav Bar Icons/Greyed Icons/list_icon.png')}/>
                    <Text style={}>List</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                setChangePage(ChangePage = 1);
            }}>
                <View style={}>
                    <Image style={""} source={require('../Mockups + Comps/Icons/Nav Bar Icons/Greyed Icons/car_icon.png')}/>
                    <Text style={}>Transport</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                setChangePage(ChangePage = 4);
            }}>
                <View style={}>
                    <Image style={""} source={require('../Mockups + Comps/Icons/Nav Bar Icons/Greyed Icons/fav_icon.png')}/>
                    <Text style={}>Favourites</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MenuBar;