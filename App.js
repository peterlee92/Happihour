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
import FavPage from './screens/FavPage';
import Register from './screens/Register';
import Detail from './screens/Detail';
import MenuBar from './comps/MenuBar';
import GetHome from './screens/GetHome';
import Taxi from './screens/Taxi';
import ProfilePage from './screens/ProfilePage';
import FavItems from './comps/FavItems';
import List from './comps/List';
import MapPage from './screens/MapPage';
import Map from './comps/Map';
import DetailContent from './comps/DetailContent';


// import fontawesome for icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft, faArrowDown, faArrowUp, faChevronDown, faChevronUp, faChevronLeft, faChevronRight, 
         faHeart, faMapMarkerAlt, faBusAlt, faUserCircle, faSearch, faEnvelopeOpen,
         faClock, faEnvelope, faLock, faUser, faPen, faTaxi,
         faDirections, faPhoneAlt, faTv, faTimesCircle, faDesktop} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight, faArrowLeft, faArrowDown, faArrowUp, faChevronDown, faChevronUp, faChevronLeft, faChevronRight,
            faHeart, faMapMarkerAlt, faBusAlt, faUserCircle, faSearch, faEnvelopeOpen,
            faClock, faEnvelope, faLock, faUser, faPen, faTaxi,
            faDirections, faPhoneAlt, faTv, faTimesCircle, faDesktop)

//navigator between pages
import Route from './Route';



function App() {

  return (
    <Route />
  );
};

export default App;