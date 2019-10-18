import React from 'react';
import {View, FlatList} from 'react-native';
import FavItems from '../comps/FavItems';
import MenuBar from '../comps/MenuBar';

function ListPage(){
    return(
        <View style={''}>
            <FlatList>
                <FavItems />
            </FlatList>
            <MenuBar />
        </View>
    )
}

export default ListPage;