import React, { useState, useEffect } from 'react';
import { View, TextInput, PermissionsAndroid, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import styles from '../styles/CompStyles/MapStyles';
import Geolocation from '@react-native-community/geolocation';
import Popup from './Popup';
import {Actions} from 'react-native-router-flux';

function Map() {

    const [lati, setLati] = useState(49.282730);
    const [longti, setLongti] = useState(-123.120735);

    var region = {
        latitude: lati,
        longitude: longti,
        latitudeDelta: 0.09222,
        longitudeDelta: 0.0421
    }
    async function getLoc(){
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation',
                    message:
                        'Get geolocation',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            console.log(granted);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the map');
                Geolocation.getCurrentPosition(
                    position => {
                        setLati(position.coords.latitude)
                        setLongti(position.coords.longitude)
                    }
                )
            } else {
                console.log('geolcation permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        getLoc();
        /*Geolocation.getCurrentPosition(
            position => {

                console.log(position)
            }
        )*/
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude:lati,
                    longitude:longti,
                    latitudeDelta: 0.0992,
                    longitudeDelta: 0.0421,
                  }}
                showsUserLocation={true}
                zoomEnabled={true}
                followsUserLocation={true}
                rotateEnabled={true}
                toolbarEnabled={true}
                showsMyLocationButton={true}
            >
                <Marker
                    coordinate={{
                        latitude:lati,
                        longitude:longti
                    }}
                    image={require('../icons/marker.png')}
                >
                    <Callout 
                        tooltip
                        onPress={()=>{Actions.detail()}}
                    >
                        <Popup />
                    </Callout>
                </Marker>
            </MapView>

        </View>
    )
}

export default Map;