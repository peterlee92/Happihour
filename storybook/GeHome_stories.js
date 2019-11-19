import React from 'react';
import { storiesOf } from '@storybook/react-native';


import MenuBar from '../comps/MenuBar';
import GetHome from '../screens/GetHome';


storiesOf("GetHome Page", module)
    .add("MenuBar", ()=>{
        return <MenuBar />
    })
    .add("GetHome Page", ()=>{
        return <GetHome />
    });
    