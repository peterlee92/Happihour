import React, { useState, useEffect } from 'react';
import { View, TextInput, PermissionsAndroid, Text, Image, Button, TouchableOpacity, Picker } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import styles from '../styles/CompStyles/MapStyles';
import Geolocation from '@react-native-community/geolocation';
import Popup from './Popup';
import {Actions} from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

 
function Map(props) {

    const [lati, setLati] = useState(49.268245);
    const [longti, setLongti] = useState(-123.0348778);
    const [lalngti, setlalngit] = useState([49.268245,-123.0348778])
    const [Fbutton, setFbutton] = useState(false);
    const [Searchtxt, setSearchtxt] = useState()

    //filter buttons
    var FBut = null,
        Buttons = null;

    //filter button and text colors
    var Dcolor = "#0b2933",
        Tcolor = "#0b2933",
        Lcolor = "#0b2933",
        Dtxt = 'white',
        Ttxt = 'white',
        Ltxt = 'white';

    //button color if statement
    if(props.Timepop == true){
        Tcolor = "#fed873";
        Ttxt = "black"
    }else if(props.Daypop == true){
        Dcolor = "#fed873";
        Dtxt = "black"
    }else if(props.Locationpop == true){
        Lcolor = "#fed873";
        Ltxt = "black";
    }
 
    //filter by button
    if(Fbutton == false){
        FBut = (
            <TouchableOpacity
                style={styles.FGcontainer}
                onPress={()=>{setFbutton(!Fbutton)}}
            >
                <Text style={styles.Ftext}>Filter By</Text>
            </TouchableOpacity>
        )
        Buttons = null;
    }else {
        FBut = (
            <TouchableOpacity
                style={styles.FRcontainer}
                onPress={()=>{
                    setFbutton(!Fbutton)
                    
                }}
            >
                <Text style={styles.Ftext}>Close Filter</Text>
            </TouchableOpacity>
        )
        Buttons = (
            <View style={styles.buttonContainer}>
                <View >
                    <TouchableOpacity 
                        style={[styles.button,{backgroundColor:Dcolor}]}
                        onPress={()=>{
                            props.setDaypop(true);
                            props.setTimepop(false);
                            props.setLocationpop(false);
                            }}>
                        <Text style={[styles.buttontxt,{color:Dtxt}]}>{props.Daytxt}</Text>
                    </TouchableOpacity>
                </View>                  
                <View >
                    <TouchableOpacity 
                        style={[styles.button,{backgroundColor:Lcolor}]}
                        onPress={()=>{
                            props.setDaypop(false);
                            props.setLocationpop(true);
                            props.setTimepop(false);
                            }}>
                        <Text style={[styles.buttontxt,{color:Ltxt}]}>{props.Locationtxt}</Text>
                    </TouchableOpacity>
                </View>    
                <View >
                    <TouchableOpacity 
                        style={[styles.button,{backgroundColor:Tcolor}]}
                        onPress={()=>{
                            props.setDaypop(false);
                            props.setTimepop(true);
                            props.setLocationpop(false);
                        }}>
                        <Text style={[styles.buttontxt,{color:Ttxt}]}>{props.Timetxt}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
   
 
    var initialregion = {
        latitude: lati,
        longitude: longti,
        latitudeDelta: 0.09222,
        longitudeDelta: 0.0421
    }

    //the function that grabs the current location
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

    var SearchFilter=async(Svalue)=>{

        if(Svalue == "" || Svalue == " " || Svalue == "  "){
            props.setSfilter([]);
        }else{
            let searchresponse =await fetch('http://142.232.150.227/Happihour/SearchFilter.php',{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    search:Svalue
                })
            })
    
            let searchdata = await searchresponse.json();
            console.log(searchdata)
            if(searchdata == "wrong"){
                return props.setSfilter([]);
            }else{ 
                props.setSfilter(searchdata)
                props.setDLTfilter([]);
                console.log(Svalue)
            }
        }
        

        
    }   

    var markers = [];
    if(props.Sfilter.length <=0 && 0 < props.DLTfilter.length){
        // setlalngit([props.DLTfilter[1].latitude, props.DLTfilter[1].longitude])
        for(var i = 0; i < props.DLTfilter.length; i++){
            var nav=(n)=> Actions.detail({text:n})
            var tmarkers = (
                <Marker
                    key={i}
                    coordinate={{
                        latitude:Number(props.DLTfilter[i].latitude),
                        longitude:Number(props.DLTfilter[i].longtitude)
                    }}
                    image={require('../imgs/pin.png')}
                > 
                    <Callout 
                        tooltip
                        onPress={nav.bind(this, props.DLTfilter[i].name)}
                    >
                        <Popup 
                            name={props.DLTfilter[i].name}
                            address={props.DLTfilter[i].address}
                        />
                    </Callout>
                </Marker>
            )
            markers.push(tmarkers)
        }
    }else if(props.DLTfilter.length <=0 && 0 < props.Sfilter.length){
        // setlalngit([propsSfilter[1].latitude, propsSfilter[1].longitude])
        for(var i = 0; i < props.Sfilter.length; i++){
            var nav=(n)=> Actions.detail({text:n})
            var smarkers = (
                <Marker
                    key={i}
                    coordinate={{
                        latitude:Number(props.Sfilter[i].latitude),
                        longitude:Number(props.Sfilter[i].longtitude)
                    }}
                    image={require('../imgs/pin.png')}
                >
                    <Callout 
                        tooltip
                        onPress={nav.bind(this, props.Sfilter[i].name)}
                    >
                        <Popup 
                            name={props.Sfilter[i].name}
                            address={props.Sfilter[i].address}
                        />
                    </Callout>
                </Marker>
            )
            markers.push(smarkers)
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
                    latitude:lalngti[0],
                    longitude:lalngti[1],
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
            <FontAwesomeIcon icon="search" color={"rgba(0,0,0,0.6)"} size={20} style={{position:'absolute',left:30,elevation:20}}/>
                <TextInput 
                    placeholder="Bar, Restaurant and Pub"
                    style={styles.searchBar}
                    onChangeText={(t)=>{
                        setSearchtxt(t)
                        props.setSearchvalue(t)
                    }}
                    value={props.Searchvalue}
                    returnKeyType="search"
                    onSubmitEditing={()=>{SearchFilter(Searchtxt)}}
                />

                {FBut}

            </View>

            {Buttons}

        </View>
    )
}

export default Map;