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
import ExecMenu from './screens/Exec';
import Transit from './screens/Transit';

// import fontawesome for icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowLeft, faArrowDown, faArrowUp, faChevronDown, faChevronUp, faChevronLeft, faChevronRight,
         faHeart, faMapMarkerAlt, faBusAlt, faUserCircle, faSearch, faEnvelopeOpen,
         faClock, faEnvelope, faLock, faUser, faPen, faTaxi,
         faDirections, faPhoneAlt, faTv, faTimesCircle, faDesktop,
         faPlus, faCalendarAlt,faImage, faMinus,
         faMapSigns, faHamburger, faCocktail, faWineGlassAlt, faDice, faCar, faCheck, faMobile, faMobileAlt, 
         faCheckSquare, faSquare, faCalendarDay, faGlassCheers, faCaretDown, faHandsHelping, faEnvelopeOpenText, faGlobe} from '@fortawesome/free-solid-svg-icons';


library.add(faArrowRight, faArrowLeft, faArrowDown, faArrowUp, faChevronDown, faChevronUp, faChevronLeft, faChevronRight,
            faHeart, faMapMarkerAlt, faBusAlt, faUserCircle, faSearch, faEnvelopeOpen,
            faClock, faEnvelope, faLock, faUser, faPen, faTaxi, faMobile, faMobileAlt,
            faDirections, faPhoneAlt, faTv, faTimesCircle, faDesktop,
            faPlus, faCalendarAlt,faImage, faMinus,
            faMapSigns, faHamburger, faCocktail, faWineGlassAlt, faDice, faCar, faCheck, faCheckSquare, faSquare, faCalendarDay,
            faGlassCheers, faCaretDown, faHandsHelping, faEnvelopeOpenText, faGlobe)





//navigator between pages
import Route from './Route';
import ContactUs from './screens/ContactUs';
import EditAccount from './screens/EditAccount';
import Gethomemap from './comps/Gethomemap';

import Loading from './screens/Loading';

import ForgotPassword from './screens/ForgotPassword';
import TimePopup from './comps/TimePopup';
import LocationPopup from './comps/LocationPopup';
import DetailHeader from './comps/DetailHeader';
import DayPopup from './comps/DayPopup';

//onboarding pages
import OnBoarding1 from './comps/OnBoarding1';
import OnBoarding2 from './comps/OnBoarding2';
import OnBoarding3 from './comps/OnBoarding3';
import OnBoarding4 from './comps/OnBoarding4';
import OnBoardingPage from './screens/OnBoardingPage';

//Psa
import Psa01 from './comps/Psa01';
import Psa02 from './comps/Psa02';
import Psa03 from './comps/Psa03';
import Psa04 from './comps/Psa04';
import Psa05 from './comps/Psa05';
import Psa06 from './comps/Psa06';
import Psa07 from './comps/Psa07';
import PSAPopUps from './comps/PSAPopUps';
import Exec from './screens/Exec';
import FavPopup from './comps/FavPopup';


function App() {

  return (

    <Route />

  );
};

export default App;
// export default from "./storybook";
