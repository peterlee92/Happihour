/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles/AppStyle';
import LoginForm from './comps/LoginForm';

function App() {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

export default App;
