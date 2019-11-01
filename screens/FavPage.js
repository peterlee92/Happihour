import React from 'react';
import {View, FlatList, ScrollView, SafeAreaView, Image, ImageBackground} from 'react-native';
import FavItems from '../comps/FavItems';
import MenuBar from '../comps/MenuBar';

function FavPage(){
    return(
        <View style={{ height: "100%", backgroundColor:"#0E1617"}}>
            {/* <Image  source={require('../imgs/Flow_Header.svg')} /> */}
            <ImageBackground source={require('../imgs/bg1.png')} style={{width:'100%', height:'100%'}}>
            <SafeAreaView>
            <ScrollView>
                <FavItems />
                <FavItems />
                <FavItems />
                <FavItems />
                <FavItems />
                <FavItems />
                <FavItems />
                <FavItems />
            </ScrollView>
            </SafeAreaView>
            <MenuBar />
            </ImageBackground>
        </View>
    )
}

export default FavPage;