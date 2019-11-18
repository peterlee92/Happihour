import React from 'react';
import { storiesOf } from '@storybook/react-native';

import AddPhoto from '../comps/ExecForm';
import ExecNav from '../screens/ExecInfo';
import ExecPhoto from '../screens/ExecMenu';


storiesOf("ExecPhoto Page", module)
    .add("AddPhoto", ()=>{
        return <AddPhoto />
    })
    .add("ExecNav", ()=>{
        return <ExecNav />
    })
    .add("ExecPhoto Page", ()=>{
        return <ExecPhoto />
    });
    