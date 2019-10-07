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
  );
};

export default App;
