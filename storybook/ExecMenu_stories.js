import React from 'react';
import { storiesOf } from '@storybook/react-native';

import AddMenu from '../comps/ExecForm';
import ExecNav from '../screens/ExecInfo';
import ExecMenu from '../screens/ExecMenu';


storiesOf("ExecMenu Page", module)
    .add("AddMenu", ()=>{
        return <AddMenu />
    })
    .add("ExecNav", ()=>{
        return <ExecNav />
    })
    .add("ExecMenu Page", ()=>{
        return <ExecMenu />
    });
    