import React from 'react';
import {View, Image} from 'react-native';
import Map from '../comps/Map';
import MenuBar from '../comps/MenuBar'
import styles from '../styles/ScreenStyles/MapPageStyles';



function MapPage(props){
    const region = {
        latitude:49.282730,
        longitude:-123.120735,
        latitudeDelta:0.09222,
        longitudeDelta:0.0421
    }
    return(
        <View style={{flex:1}}>
            {/* <Image 
                style={styles.header}
                source={require('../imgs/Flow_Header.png')}
            />           */}
            {/* <View style={{position:'absolute', elevation:100, width:'100%',justifyContent:'center',alignItems:'center'}}>
                <SearchBar
                    style={styles.searchBar}
                    placeholder="Bar, Restaurant and Pub"
                    inputContainerStyle={{backgroundColor:'white', height:30,width:'80%',borderWidth:0}}
                />
            </View> */}
            {/* <Map 
                page={props.page}
            /> */}
            {/* <MenuBar
            map='#F4B869'
            home='#74726C'
            fav='#74726C'
            profile='#74726C' /> /> */}
        </View>
    )
}

export default MapPage;