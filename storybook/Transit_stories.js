import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Transit from '../screens/Transit';


storiesOf("Transit Page", module)
    .add("Transit Page", ()=>{
        return <Transit />
    });
    