import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

function FavItems(name, descr, img, count) {
    return(
        <TouchableOpacity onPress={}>
            <View style={}>
                <View>
                    <Image style={} source={require({img})}/>
                </View>
                <View>
                    <Text style={}>{name}</Text>
                    <Text style={}>{descr}</Text>
                <View>
                    <Image style={} source={require('')}/>
                    <Text>{count}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default FavItems;