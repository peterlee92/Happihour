import React from 'react';
import { storiesOf } from '@storybook/react-native';

import LoginForm from '../comps/LoginForm';
import Login from '../screens/Login';


storiesOf("Login Page", module)
    .add("LoginForm", ()=>{
        return <LoginForm />
    })
    .add("Login Page", ()=>{
        return <Login />
    });
    