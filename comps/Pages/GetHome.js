import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import MenuBar from '../MenuBar';

function GetHome(){
    return(
        <View style={}>
            <View>
                <TouchableOpacity onPress={}>
                    <Image source={require('')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={}>
                    <Image source={require('')}/>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={}>
                    <Image source={require('')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={}>
                    <Image source={require('')}/>
                </TouchableOpacity>
            </View>
        </View>
        <MenuBar />
    )
}

export default GetHome;