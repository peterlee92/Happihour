import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Map from '../comps/Map';
import MenuBar from '../comps/MenuBar';
import TimePopup from '../comps/TimePopup';
import LocationPopup from '../comps/LocationPopup';
import MapPage from '../screens/MapPage';


storiesOf("MapPage", module)
    .add("Map", ()=>{
        return <Map />
    })
    .add("MenuBar", ()=>{
        return <MenuBar />
    })
    .add("TimePopup", ()=>{
        return <TimePopup />
    })
    .add("LocationPopup", ()=>{
        return <LocationPopup />
    })
    .add("MapPage", ()=>{
        return <MapPage />
    });
    