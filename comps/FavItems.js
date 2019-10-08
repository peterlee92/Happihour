import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

function FavItems(name, descr, img, count) {
    return(
        <TouchableOpacity>
            <View style={''}>
                <View>
                    <Image style={} source={require('')}/>
                </View>
                <View>
                    <Text ></Text>
                    <Text ></Text>
                <View>
                    <Image style={} source={require('../Mockups + Comps/Icons/Favourite Icons/fav_icon2.png')}/>
                    <Text></Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default FavItems;