import React from 'react';
import { storiesOf } from '@storybook/react-native';

import ExecForm from '../comps/ExecForm';
import ExecInfo from '../screens/ExecInfo';

storiesOf("ExecInfo Page", module)
    .add("ExecForm", ()=>{
        return <ExecForm />
    })
    .add("ExecInfo Page", ()=>{
        return <ExecInfo />
    });
    