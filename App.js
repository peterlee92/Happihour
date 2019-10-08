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
import ListPage from './comps/Pages/ListPage';
import FavPage from './comps/Pages/FavPage';
import Register from './screens/Register';
import Detail from './screens/Detail';



function App() {

  return (
    <Login />
  );
};

export default App;

