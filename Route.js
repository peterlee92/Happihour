import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import LoginForm from './screens/LoginForm';
import Register from './screens/Register';


function Route(){
    return(
        <Router>
            <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={LoginForm} title="LoginForm" initial={true}/>
            <Scene key="register" component={Register} title="Register" />
        </Stack>
        </Router>
    )
}

export default Route;