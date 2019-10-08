import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

//@@ import screens here
import Login from './screens/Login';
import Register from './screens/Register';


function Route(){
    return(
        <Router>
            <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login} title="Login" initial={true}/>
            <Scene key="register" component={Register} title="Register" />
        </Stack>
        </Router>
    )
}

export default Route;