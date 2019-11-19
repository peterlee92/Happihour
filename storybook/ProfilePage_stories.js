import React from 'react';
import { storiesOf } from '@storybook/react-native';

import MenuBar from '../comps/MenuBar';
import ProfilePage from '../screens/ProfilePage';


storiesOf("ProfilePage", module)
    .add("MenuBar", ()=>{
        return <MenuBar />
    })
    .add("ProfilePage", ()=>{
        return <ProfilePage />
    });
    