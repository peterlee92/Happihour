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
import ExecInfo from './screens/ExecInfo';
import ExecHour from './screens/ExecHour';
import ExecPhoto from './screens/ExecPhoto';
import ExecMenu from './screens/ExecMenu';
import Transit from './screens/Transit';
import Psa01 from './comps/Psa01';



// import fontawesome for icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft, faArrowDown, faArrowUp, faChevronDown, faChevronUp, faChevronLeft, faChevronRight,
         faHeart, faMapMarkerAlt, faBusAlt, faUserCircle, faSearch, faEnvelopeOpen,
         faClock, faEnvelope, faLock, faUser, faPen, faTaxi,
         faDirections, faPhoneAlt, faTv, faTimesCircle, faDesktop,
         faPlus, faCalendarAlt,faImage, faMinus,
         faMapSigns, faHamburger, faCocktail, faWineGlassAlt, faDice, faCar, faCheck, faMobile, faMobileAlt, faCheckSquare, faSquare} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight, faArrowLeft, faArrowDown, faArrowUp, faChevronDown, faChevronUp, faChevronLeft, faChevronRight,
            faHeart, faMapMarkerAlt, faBusAlt, faUserCircle, faSearch, faEnvelopeOpen,
            faClock, faEnvelope, faLock, faUser, faPen, faTaxi, faMobile, faMobileAlt,
            faDirections, faPhoneAlt, faTv, faTimesCircle, faDesktop,
            faPlus, faCalendarAlt,faImage, faMinus,
            faMapSigns, faHamburger, faCocktail, faWineGlassAlt, faDice, faCar, faCheck, faCheckSquare, faSquare)


//navigator between pages
import Route from './Route';
import ContactUs from './screens/ContactUs';
import EditAccount from './screens/EditAccount';
import Gethomemap from './comps/Gethomemap';

import Loading from './screens/Loading';

import ForgotPassword from './screens/ForgotPassword';
import TimePopup from './comps/TimePopup';
import LocationPopup from './comps/LocationPopup';






function App() {

  return (
    <List />
  );
};

export default App;
// export default from "./storybook";