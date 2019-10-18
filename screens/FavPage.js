import React from 'react';
import {View, FlatList, ScrollView, SafeAreaView} from 'react-native';
import FavItems from '../comps/FavItems';
import MenuBar from '../comps/MenuBar';
import MainHeader from '../comps/MainHeader';

function FavPage(){
    return(
        <View style={{ height: "100%", backgroundColor:"#061a20"}}>
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
        </View>
    )
}

export default FavPage;