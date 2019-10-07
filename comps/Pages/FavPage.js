import React from 'react';
import {View, FlatList} from 'react-native';
import FavItems from '../FavItems';
import MenuBar from '../MenuBar';

function FavPage(){
    return(
        <View style={''}>
            <FlatList>
                <FavItems />
            </FlatList>
            <MenuBar />
        </View>
    )
}

export default FavPage;