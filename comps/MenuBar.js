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
                    <Image style={} source={require('')}/>
                    <Text style={}>Map</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                setChangePage(ChangePage = 3);
            }}>
                <View style={}>
                    <Image style={""} source={require('')}/>
                    <Text style={}>List</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                setChangePage(ChangePage = 1);
            }}>
                <View style={}>
                    <Image style={""} source={require('')}/>
                    <Text style={}>Transport</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                setChangePage(ChangePage = 4);
            }}>
                <View style={}>
                    <Image style={""} source={require('')}/>
                    <Text style={}>Favourites</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MenuBar;