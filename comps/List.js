import FavItems from './FavItems';
import MenuBar from './MenuBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

import SlidingPanel from 'react-native-sliding-up-down-panels';


export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>                      
        
        {/* <View style={styles.bodyViewStyle}>
          <Text>Hello My World</Text>
        </View> */}
        
        <SlidingPanel
            headerLayoutHeight = {100}
            headerLayout = { () =>
                <View style={styles.headerLayoutStyle}>
                    <Image source={require('../imgs/FlowTab.png')} style={{width:'100%', height:100, marginBottom:-50}} />
                    <View style={{height:75, justifyContent:'center', alignItems:'center', position:'absolute', bottom:-5, right:155}}>
                        <FontAwesomeIcon icon="arrow-up" size={32} color="#ffef86"/>
                        <Text style={styles.commonTextStyle}>View Map</Text>
                    </View>
                </View>
            }
            slidingPanelLayout = { () =>
                <View style={styles.slidingPanelLayoutStyle}>
             <SafeAreaView>
                 <ScrollView>
                     <FavItems />
                     <FavItems />
                     <FavItems />
                    <FavItems />
                    <FavItems />
                    <FavItems />
                    <FavItems />
                     <FavItems />
                </ScrollView>
               </SafeAreaView>
                </View>
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyViewStyle: {
    flex: 9,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  headerLayoutStyle: {
    width, 
    height: 100, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    width, 
    height, 
    backgroundColor: '#0E1617', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  commonTextStyle: {
    color: '#ffef86', 
    fontSize: 16,
    fontWeight:'bold'
  },
});
