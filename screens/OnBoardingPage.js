import React from 'react';
import {View} from 'react-native';
import {Pages} from 'react-native-pages';
import OnBoarding1 from '../comps/OnBoarding1';
import OnBoarding2 from '../comps/OnBoarding2';
import OnBoarding3 from '../comps/OnBoarding3';
import OnBoarding4 from '../comps/OnBoarding4';

function OnBoardingPage(){

    return(
        <Pages
            indicatorColor='#F7A957'
        >
            <OnBoarding1 />
            <OnBoarding2 />
            <OnBoarding3 />
            <OnBoarding4 />
        </Pages>
    )
}

export default OnBoardingPage;