import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

//@@ import screens here
import Login from './screens/Login';
import Register from './screens/Register';
import Detail from './screens/Detail';
import MapPage from './screens/MapPage';


function Route(){
    return(
        <Router>
            <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login} title="Login" initial={true}/>
            <Scene key="register" component={Register} title="Register" />
            <Scene key="mappage" component={MapPage} title="MapPage" />
            <Scene key="detail" component={Detail} title="Detail" />
        </Stack>
        </Router>
    )
}

export default Route;