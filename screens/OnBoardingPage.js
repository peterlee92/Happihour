import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Pages} from 'react-native-pages';
import OnBoarding1 from '../comps/OnBoarding1';
import OnBoarding2 from '../comps/OnBoarding2';
import OnBoarding3 from '../comps/OnBoarding3';
import OnBoarding4 from '../comps/OnBoarding4';
import Actions from 'react-native-router-flux';

function OnBoardingPage(){

    const [nextPage, setNextPage] = useState(0);

    var page = null;
    var scrn = (        
        <Pages 
            indicatorColor='#F7A957'
            startPage={nextPage}
        >
            <OnBoarding1 setNextPage={setNextPage} />
            <OnBoarding2 setNextPage={setNextPage}/>
            <OnBoarding3 setNextPage={setNextPage}/>
            <OnBoarding4 />
        </Pages>
    )


 var showPage=()=>{
    if(nextPage == 0){
        page = 0;
        console.log(page);
        console.log(nextPage);
        scrn = (        
            <Pages 
                indicatorColor='#F7A957'
                startPage={nextPage}
            >
                <OnBoarding1 setNextPage={setNextPage} />
                <OnBoarding2 setNextPage={setNextPage}/>
                <OnBoarding3 setNextPage={setNextPage}/>
                <OnBoarding4 />
            </Pages>
        )
    } else
    if(nextPage == 1){
        page = 1;
        console.log(page);
        console.log(nextPage);

        scrn = (         
            <Pages 
                indicatorColor='#F7A957'
                startPage={nextPage}
            >
                <OnBoarding1 setNextPage={setNextPage} />
                <OnBoarding2 setNextPage={setNextPage}/>
                <OnBoarding3 setNextPage={setNextPage}/>
                <OnBoarding4 />
            </Pages>
        )
    } else
    if(nextPage == 2){
        page = 2;
        console.log(page);
        console.log(nextPage);

        scrn = (       
            <Pages 
                indicatorColor='#F7A957'
                startPage={nextPage}
            >
            <OnBoarding1 setNextPage={setNextPage} />
            <OnBoarding2 setNextPage={setNextPage}/>
            <OnBoarding3 setNextPage={setNextPage}/>
            <OnBoarding4 />
        </Pages>
        )
    } else
    if(nextPage == 3){
        page = 3;
        console.log(page);
        console.log(nextPage);

        scrn = (      
            <Pages 
                indicatorColor='#F7A957'
                startPage={nextPage}
            >
                <OnBoarding1 setNextPage={setNextPage} />
                <OnBoarding2 setNextPage={setNextPage}/>
                <OnBoarding3 setNextPage={setNextPage}/>
                <OnBoarding4 />
            </Pages>
        )
    }
 }
    

    useEffect(()=>{
        showPage();
        console.log('work');
    },[nextPage])

    return(
       scrn
    )
}

export default OnBoardingPage;