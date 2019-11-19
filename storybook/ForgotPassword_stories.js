import React from 'react';
import { storiesOf } from '@storybook/react-native';

import ThanksEmail from '../comps/ThanksEmail';
import ForgotPassword from '../screens/ForgotPassword';


storiesOf("ForgotPassword Page", module)
    .add("ThanksEmail", ()=>{
        return <ThanksEmail />
    })
    .add("ForgotPassword Page", ()=>{
        return <ForgotPassword />
    });
    