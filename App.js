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

function App() {

  return (
    <View style={{ height: "100%"}}>
      <ProfilePage />
    </View>
  );
};

export default App;