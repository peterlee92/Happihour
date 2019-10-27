import React from 'react';
import {View, FlatList, ScrollView, SafeAreaView, Image, ImageBackground, TextInput} from 'react-native';
import FavItems from '../comps/FavItems';
import MenuBar from '../comps/MenuBar';
import List from '../comps/List';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

function MapPage(){
    return(
        <View style={{height:'100%', width:'100%',alignItems:'center'}}>
            <View style={{width:'60%', height:40, justifyContent:'center', alignItems:'center', flexDirection:'row', backgroundColor:'#FCF4DB', borderRadius:10, top:50}}>
                <FontAwesomeIcon icon='search' style={{marginRight:10}}/>
                <TextInput placeholder='Bar, Restaurant, or Pub'/>
            </View>
            <List />
            <MenuBar />
        </View>
    )
}

export default MapPage;