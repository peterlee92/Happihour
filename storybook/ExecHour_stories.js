import React from 'react';
import { storiesOf } from '@storybook/react-native';

import AddHour from '../comps/AddHour';
import ExecNav from '../comps/ExecNav';
import ExecHour from '../screens/ExecHour';

storiesOf("ExecHour Page", module)
    .add("AddHour", ()=>{
        return <AddHour />
    })
    .add("ExecNav", ()=>{
        return <ExecNav />
    })
    .add("ExecHour Page", ()=>{
        return <ExecHour />
    });