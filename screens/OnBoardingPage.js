import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Pages} from 'react-native-pages';
import OnBoarding1 from '../comps/OnBoarding1';
import OnBoarding2 from '../comps/OnBoarding2';
import OnBoarding3 from '../comps/OnBoarding3';
import OnBoarding4 from '../comps/OnBoarding4';
import Loading from './Loading';
import Actions from 'react-native-router-flux';
import LottieView from 'lottie-react-native';

function OnBoardingPage(){

    const [nextPage, setNextPage] = useState(0);

    var pref = React.createRef();
    var page = null;
    var scrn = (        
        <Pages 
            indicatorColor='#F7A957'
            indicatorPosition='none'
            startPage={nextPage}
            ref={pref}
        >
            <OnBoarding1 setNextPage={()=>{
                pref.current.scrollToPage(1, true)
            }} />
            <OnBoarding2 setNextPage={()=>{
                pref.current.scrollToPage(2, true)
            }}/>
            <OnBoarding3 setNextPage={()=>{
                pref.current.scrollToPage(3, true)
            }}/>
            <OnBoarding4 />
        </Pages>
    )
    return(
       scrn
    )
}

export default OnBoardingPage;