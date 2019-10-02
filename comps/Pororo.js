import React from 'react';
import {View, Image} from 'react-native';

const Pororo = () => {
    return(
        <View>
            <Image
            style={{width:250,height:250}}
            source={require('../imgs/Pororo.png')}
            />
        </View>
    )
}

export default Pororo;