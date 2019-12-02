import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/CompStyles/PopupStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

function Popup({name, img1, img2, happyhour}){

    var Image1 = {uri:img1}
    var Image2 = {uri:img2}
    return(
        <View style={styles.container}>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text>
                        <Image 
                            source={Image1}
                            style={styles.img}
                        />
                    </Text>
                    <Text>
                        <Image 
                            source={Image2}
                            style={styles.img}
                        />
                    </Text>
                </View>
                
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
                <TouchableOpacity onPress={()=>{Actions.detail()}}>
                    <View style={styles.timeContainer}>
                        <Text style={{color:'orange'}}>Happy hour</Text>
                        <Text style={{color:'white'}}>{happyhour}</Text>
                        <FontAwesomeIcon icon='chevron-right' size={12} color={'yellow'} style={{position:'absolute', bottom:5, right:5}}/>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

export default Popup;