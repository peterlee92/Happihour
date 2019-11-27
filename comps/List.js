import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ListItems from './ListItems';
import React, { useState } from 'react';
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


export default function List(props) {
  const [mtop, setMTop] = useState(0);
    return (
      <View style={[styles.container, {marginTop:mtop}]}>                      
        <SlidingPanel
            headerLayoutHeight = {100}
            headerLayout = { () =>
                <View style={[styles.headerLayoutStyle]}>
                    <Image source={require('../imgs/FlowTab.png')} style={{width:'100%', height:60, marginBottom:0, elevation:98}} />
                    <View style={{height:75, justifyContent:'center', alignItems:'center', position:'absolute', bottom:30, right:170, elevation:99}}>
                        <FontAwesomeIcon icon="chevron-up" size={30} color="#ffef86" style={{marginTop:0}}/>
                        {/* <Text style={[styles.commonTextStyle,{marginBottom:3}]}>View List</Text> */}
                        {/* <Text style={[styles.commonTextStyle, {marginTop:10, marginBottom:20}]}>View Map</Text>
                        <FontAwesomeIcon icon="chevron-down" size={32} color="#ffef86" style={{marginBottom:-35, marginTop:-20}}/> */}
                    </View>
                </View>
            }
            slidingPanelLayout = { () =>
                <View style={[styles.slidingPanelLayoutStyle, {marginTop:50, bottom:40, elevation:90}]}>
             <SafeAreaView>
                 <ScrollView>
                    {
                      props.Sfilter.map((obj,i)=>{
                        return <ListItems 
                          key={i}
                          name={obj.name}
                          address={obj.address}
                        />
                      })
                    }
                    {
                      props.DLTfilter.map((obj,i)=>{
                        return <ListItems 
                          key={i}
                          name={obj.name}
                          address={obj.address}
                        />
                      })
                    }
                    
                </ScrollView>
               </SafeAreaView>
                </View>
            }
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bodyViewStyle: {
    flex: 9,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  headerLayoutStyle: {
    width, 
    height: 120, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:75,
    bottom:50
  },
  slidingPanelLayoutStyle: {
    width, 
    height:height, 
    backgroundColor: '#0E1617', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  commonTextStyle: {
    color: '#ffef86', 
    fontSize: 18,
    textAlign:'center',
    fontWeight:'bold',
    fontFamily:'Nunito-Bold'
  },
});
