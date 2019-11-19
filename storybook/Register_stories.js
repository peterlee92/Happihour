import React from 'react';
import { storiesOf } from '@storybook/react-native';

import RegisterForm from '../comps/RegisterForm';
import Register from '../screens/Register';


storiesOf("Register Page", module)
    .add("RegisterForm", ()=>{
        return <RegisterForm />
    })
    .add("Register Page", ()=>{
        return <Register />
    });
    