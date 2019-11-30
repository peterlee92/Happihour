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
import ExecInfo from './screens/ExecInfo';
import Exec from './screens/Exec';
import OnBoarding1 from './comps/OnBoarding1';
import OnBoarding2 from './comps/OnBoarding2';
import OnBoarding3 from './comps/OnBoarding3';
import OnBoarding4 from './comps/OnBoarding4';
import OnBoardingPage from './screens/OnBoardingPage';
import Loading from './screens/Loading';


function Route(){
    return(
        <Router>
            <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login} title="Login" />
            <Scene key="register" component={Register} title="Register" />
            <Scene key="favPage" component={FavPage} title="favPage"  />
            <Scene key="getHome" component={GetHome} title="GetHome" />
            <Scene key="profile" component={ProfilePage} title='Profile' />
            <Scene key='editAccount' component={EditAccount} title="EditAccount" />
            <Scene key='contactUs' component={ContactUs} title="ContactUs" />
            <Scene key='taxi' component={Taxi} title="Taxi" />
            <Scene key='transit' component={Transit} title="Transit" />
            <Scene key="mappage" component={MapPage} title="MapPage" initial={true}/>
            <Scene key="detail" component={Detail} title="Detail" />
            <Scene key="forgotPassword" component={ForgotPassword} title="ForgotPassword" />
            <Scene key="execInfo" component={ExecInfo} title="ExecInfo" />
            <Scene key="exec" component={Exec} title="Exec" />
            <Scene key="board1" component={OnBoarding1} title="Board1" />
            <Scene key="board2" component={OnBoarding2} title="Board2" />
            <Scene key="board3" component={OnBoarding3} title="Board3" />
            <Scene key="board4" component={OnBoarding4} title="Board4" />
            <Scene key="onboarding" component={OnBoardingPage} title="Onboarding" />
            <Scene key="loading" component={Loading} title="Loading" />
        </Stack>
        </Router>
    )
}

export default Route;