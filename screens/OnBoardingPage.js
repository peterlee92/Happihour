import React, {useState} from 'react';
import {View} from 'react-native';
import {Pages} from 'react-native-pages';
import OnBoarding1 from '../comps/OnBoarding1';
import OnBoarding2 from '../comps/OnBoarding2';
import OnBoarding3 from '../comps/OnBoarding3';
import OnBoarding4 from '../comps/OnBoarding4';

function OnBoardingPage(){

    const [nextPage, setNextButton] = useState(0);

    var page = <Pages
    indicatorColor='#F7A957'
>
    <OnBoarding1 setNextButton={setNextButton} />
    <OnBoarding2 setNextButton={setNextButton}/>
    <OnBoarding3 setNextButton={setNextButton}/>
    <OnBoarding4 setNextButton={setNextButton}/>
</Pages>

    if(nextPage === 1){
        page = <Pages
            indicatorColor='#F7A957'
        >
            <OnBoarding1 setNextButton={setNextButton} />
            <OnBoarding2 setNextButton={setNextButton}/>
            <OnBoarding3 setNextButton={setNextButton}/>
            <OnBoarding4 setNextButton={setNextButton}/>
        </Pages>
    } else
    if(nextPage === 2){
        page = <Pages
            indicatorColor='#F7A957'
        >
            <OnBoarding1 setNextButton={setNextButton} />
            <OnBoarding2 setNextButton={setNextButton}/>
            <OnBoarding3 setNextButton={setNextButton}/>
            <OnBoarding4 setNextButton={setNextButton}/>
        </Pages>
    } else
    if(nextPage === 3){
        page = <Pages
            indicatorColor='#F7A957'
        >
            <OnBoarding1 setNextButton={setNextButton} />
            <OnBoarding2 setNextButton={setNextButton}/>
            <OnBoarding3 setNextButton={setNextButton}/>
            <OnBoarding4 />
        </Pages>
    }

    return(
        page
    )
}

export default OnBoardingPage;