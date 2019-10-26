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


function Route(){
    return(
        <Router>
            <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login} title="Login" />
            <Scene key="register" component={Register} title="Register" />
            <Scene key="favPage" component={FavPage} title="favPage"  />
            <Scene key="getHome" component={GetHome} title="GetHome"  />
            <Scene key="profile" component={ProfilePage} title='Profile' initial={true} />
            <Scene key='editAccount' component={EditAccount} title="EditAccount" />
            <Scene key='contactUs' component={ContactUs} title="ContactUs" />
            <Scene key='taxi' component={Taxi} title="Taxi" />
        </Stack>
        </Router>
    )
}

export default Route;