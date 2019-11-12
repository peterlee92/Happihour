import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

//@@ import screens here
import Login from './screens/Login';
import Register from './screens/Register';
import ProfilePage from './screens/ProfilePage';
import FavPage from './screens/FavPage';
import GetHome from './screens/GetHome';
import EditAccount from './screens/EditAccount';
import ContactUs from './screens/ContactUs';
import Taxi from './screens/Taxi';
import Transit from './screens/Transit';
import MapPage from './screens/MapPage';
import List from './comps/List';
import Detail from './screens/Detail';
import ForgotPassword from './screens/ForgotPassword';


function Route(){
    return(
        <Router>
            <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login} title="Login" initial={true} />
            <Scene key="register" component={Register} title="Register" />
            <Scene key="favPage" component={FavPage} title="favPage"  />
            <Scene key="getHome" component={GetHome} title="GetHome" />
            <Scene key="profile" component={ProfilePage} title='Profile' />
            <Scene key='editAccount' component={EditAccount} title="EditAccount" />
            <Scene key='contactUs' component={ContactUs} title="ContactUs" />
            <Scene key='taxi' component={Taxi} title="Taxi" />
            <Scene key='transit' component={Transit} title="Transit" />
            <Scene key='map' component={MapPage} title="map" />
            <Scene key='transit' component={Transit} title="Transit" />
            <Scene key="mappage" component={MapPage} title="MapPage" />
            <Scene key="detail" component={Detail} title="Detail" />
            <Scene key="forgotPassword" component={ForgotPassword} title="ForgotPassword" />

        </Stack>
        </Router>
    )
}

export default Route;