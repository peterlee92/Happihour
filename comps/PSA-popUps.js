import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Psa01 from './Psa01';
import Psa02 from './Psa02';
import Psa03 from './Psa03';
import Psa04 from './Psa04';
import Psa05 from './Psa05';
import Psa06 from './Psa06';
import Psa07 from './Psa07';

function PSAPopUps(){

    var displayPop = null;
    var numberRandom = Math.floor(Math.random() * 7 + 1);

    if(numberRandom === 1){
        displayPop = <Psa01 />
    } else
    if(numberRandom === 2){
        displayPop = <Psa02 />
    } else
    if(numberRandom === 3){
        displayPop = <Psa03 />
    } else
    if(numberRandom === 4){
        displayPop = <Psa04 />
    } else
    if(numberRandom === 5){
        displayPop = <Psa05 />
    } else
    if(numberRandom === 6){
        displayPop = <Psa06 />
    } else
    if(numberRandom === 7){
        displayPop = <Psa07 />
    }


    return(
        <View style={{width:'100%', height:'100%', position:'absolute'}}>
            {displayPop}
        </View>
    )
}

export default PSAPopUps;