/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

<<<<<<< HEAD
import React,{useState} from 'react';

import LoginForm from './screens/LoginForm';
import Register from './screens/Register';
import Detail from './screens/Detail';


import Route from './Route';

function App() {

  return (
      <Route />
=======
import React, {useState} from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles/AppStyle';
import LoginForm from './comps/LoginForm';
import GetHome from './comps/Pages/GetHome';
import ListPage from './comps/Pages/ListPage';
import FavPage from './comps/Pages/FavPage';

function App() {
  // ChangePage changes the page based on variables passed through.
  // variables passed through are done so via events such as menu
  const [ChangePage, setChangePage] = useState(0);

  var page = <LoginForm />;

  if(ChangePage == 1){
    page = <GetHome />
  } else 
  if(ChangePage == 3){
    page = <ListPage />
  } else
  if(ChangePage == 4){
    page = <FavPage />
  }

  return (
    <View style={styles.container}>
      {page}
    </View>
>>>>>>> 7e6561defb9e7b5a85b05692d9379d2c06f59632
  );
};

export default App;

