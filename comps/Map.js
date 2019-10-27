import React from 'react';
import {View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from '../styles/CompStyles/MapStyles';

function Map({region}){
    return(
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
            >
                <MapView.Marker 
                    coordinate={region}
                    pinColor="red"
                />
            </MapView>
        </View>
    )
}

export default Map;