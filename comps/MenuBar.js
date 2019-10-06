import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

function MenuBar(){
    return(
        <View style={}>
            <TouchableOpacity onPress={}>
                <View style={}>
                    <Image style={} source={require('')}/>
                    <Text style={}>Map</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={}>
                <View style={}>
                    <Image style={""} source={require('')}/>
                    <Text style={}>List</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={}>
                <View style={}>
                    <Image style={""} source={require('')}/>
                    <Text style={}>Transport</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={}>
                <View style={}>
                    <Image style={""} source={require('')}/>
                    <Text style={}>Favourites</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MenuBar;