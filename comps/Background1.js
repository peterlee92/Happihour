import React from 'react';
import {Image} from 'react-native';

Background1 = () => {
    return (
            <Image 
                style={{width:'100%',height:'100%', position:'absolute'}}
                source={require('../imgs/background1.jpg')}
            />
    );
}

export default Background1;
