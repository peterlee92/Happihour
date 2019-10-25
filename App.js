/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles/AppStyle';

// pages
import Login from './screens/Login';
import ListPage from './screens/ListPage';
import FavPage from './screens/FavPage';
import Register from './screens/Register';
import Detail from './screens/Detail';
import MenuBar from './comps/MenuBar';
import GetHome from './screens/GetHome';
import Taxi from './screens/Taxi';
import ProfilePage from './screens/ProfilePage';
import FavItems from './comps/FavItems';

<<<<<<< HEAD
// import fontawesome for icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft, faArrowDown, faArrowUp, 
         faHeart, faMapMarkerAlt, faBusAlt, faUserCircle,
         faClock, faEnvelope, faLock, faUser,
         faDirections, faPhoneAlt, faTv, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight, faArrowLeft, faArrowDown, faArrowUp, 
            faHeart, faMapMarkerAlt, faBusAlt, faUserCircle,
            faClock, faEnvelope, faLock, faUser,
            faDirections, faPhoneAlt, faTv, faTimesCircle)
=======
//navigator between pages
import Route from './Route';


>>>>>>> 99328dd00afafbe0ae595ccb8d3489534b2e329a

function App() {

  return (
    <Route />
  );
};

export default App;