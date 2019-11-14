import React, { useState, useEffect } from 'react';
import { View, TextInput, PermissionsAndroid, Text, Image, Button, TouchableOpacity, Picker } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import styles from '../styles/CompStyles/MapStyles';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Popup from './Popup';
import {Actions} from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


function Map(props) {

    const [lati, setLati] = useState();
    const [longti, setLongti] = useState();
    
    

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

    var markers = null;
    

    


    var markers = [];
    if(0 < props.Tfilter.length){
        for(var i = 0; i < props.Tfilter.length; i++){
            var tmarkers = (
                <Marker
                    key={i}
                    coordinate={{
                        latitude:props.Tfilter[i].lat,
                        longitude:props.Tfilter[i].lng
                    }}
                    image={require('../imgs/pin.png')}
                >
                    <Callout tooltip>
                        <Popup 
                            name={props.R_name[i].name}
                            address={props.R_name[i].address}
                        />
                    </Callout>
                </Marker>
            )
            markers.push(tmarkers)
        }
    }
    else if(0 < props.Lfilter.length){
        for(var i = 0; i < props.Lfilter.length; i++){
            var tmarkers = (
                <Marker
                    key={i}
                    coordinate={{
                        latitude:props.Lfilter[i].lat,
                        longitude:props.Lfilter[i].lng
                    }}
                    image={require('../imgs/pin.png')}
                >
                    <Callout tooltip>
                        <Popup 
                            name={props.R_name[i].name}
                            address={props.R_name[i].address}
                        />
                    </Callout>
                </Marker>
            )
            markers.push(tmarkers)
        }
    }
    
    

    useEffect(() => {
        // getLoc();
    
    }, []);

    return (
        <View style={styles.container}>

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude:49.268245,
                    longitude:-123.0348778,
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
           {markers}

                  
                
            </MapView>

            <View style={styles.searchContainer}>
            <FontAwesomeIcon icon="search" color={"rgba(0,0,0,0.6)"} size={20} style={{position:'absolute',left:38,elevation:20}}/>
                <TextInput 
                    placeholder="Bar, Restaurant and Pub"
                    style={styles.searchBar}
                />
            </View>

            <View style={styles.buttonContainer}>               
                <View >
                    <TouchableOpacity 
                        style={styles.timebutton}
                        onPress={()=>{
                            props.setTimepop(true);
                            }}>
                        <FontAwesomeIcon icon="clock" color={"#f4e664"} size={24} style={{marginRight:12}}/>
                        <Text style={styles.buttontxt}>TIME</Text>
                    </TouchableOpacity>
                </View>    
                <View >
                    <TouchableOpacity 
                        style={styles.locationbutton}
                        onPress={()=>{
                            props.setLocationpop(true);
                        }}>
                        <FontAwesomeIcon icon="map-marker-alt" color={"#f4e664"} size={24} style={{marginRight:12}}/>
                        <Text style={styles.buttontxt}>LOCATION</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

export default Map;