import React from 'react';
import { storiesOf } from '@storybook/react-native';

import FavItems from '../comps/FavItems';
import MenuBar from '../comps/MenuBar';
import FavPage from '../screens/FavPage';


storiesOf("FavPage", module)
    .add("FavItems", ()=>{
        return <FavItems />
    })
    .add("MenuBar", ()=>{
        return <MenuBar />
    })
    .add("FavPage", ()=>{
        return <FavPage />
    });
    