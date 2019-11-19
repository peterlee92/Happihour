import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Taxi from '../screens/Taxi';


storiesOf("Taxi Page", module)
    .add("Taxi Page", ()=>{
        return <Taxi />
    });
    