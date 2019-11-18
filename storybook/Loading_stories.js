import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Loading from '../screens/Loading';


storiesOf("Loading Page", module)
    .add("Loading Page", ()=>{
        return <Loading />
    });
    