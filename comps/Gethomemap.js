import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import styles from '../styles/CompStyles/GethomemapStyles';


function Gethomemap(){

    const [Lati, setLati] = useState();
    const [Longti, setLongti]  = useState();
    const [Mapview, setMapview] = useState();
    const destination = {latitude:49.268245,longitude:-123.0348778};
    const googleAPI = "AIzaSyDLsWDIFV96c4Btw9ohzcDiZX7MzTDnmMw"

    

    return(
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude:49.268245,
                    longitude:-123.0348778,
                    latitudeDelta: 0.0992,
                    longitudeDelta: 0.0421,
                  }}
                  style={styles.map}
                  ref={(c)=>{setMapview(c)}}
            >
                <MapViewDirections 
                    origin={{
                        latitude:49.268245,
                        longitude:-123.0348778
                    }}
                    destination={{
                        latitude:49.25182419999999,
                        longitude:-123.0042561
                    }}
                    mode='TRANSIT'
                    apikey={googleAPI}
                    language='en'
                    strokeWidth={4}
                    strokeColor='red'
                    optimizeWaypoints={true}
                />
            </MapView>
        </View>
    )
}

export default Gethomemap;
