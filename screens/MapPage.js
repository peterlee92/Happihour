import React from 'react';
import {View} from 'react-native';
import Map from '../comps/Map';


function MapPage(){
    const region = {
        latitude:49.282730,
        longitude:-123.120735,
        latitudeDelta:0.09222,
        longitudeDelta:0.0421
    }
    return(
        <View style={{flex:1}}>
            <Map region={region} />
        </View>
    )
}

export default MapPage;