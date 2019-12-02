import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Map from '../comps/Map';
import MenuBar from '../comps/MenuBar'
import styles from '../styles/ScreenStyles/MapPageStyles';
import TimePopup from '../comps/TimePopup';
import LocationPopup from '../comps/LocationPopup';
import DayPopup from '../comps/DayPopup';
import List from '../comps/List';


function MapPage(){

    const [Timepop, setTimepop] = useState(false);
    const [Daypop, setDaypop] = useState(false);
    const [Locationpop, setLocationpop] = useState(false);
    const [Locationvalue, setLocationvalue] = useState('');
    const [Timevalue, setTimevalue] = useState('');
    const [Dayvalue, setDayvalue] = useState('');
    const [DLTfilter, setDLTfilter] = useState([{"latitude":49.268245,"longtitude":-123.0348778}]);
    const [Sfilter, setSfilter] = useState([{"latitude":49.268245,"longtitude":-123.0348778}]);
    const [Daytxt,setDaytxt] = useState('Day');
    const [Timetxt,setTimetxt] = useState('Time');
    const [Locationtxt,setLocationtxt] = useState('Location');
    const [Searchvalue, setSearchvalue] = useState();

    // const DissmissKeyboard = ({children}) => (
    //     <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    //         {children}
    //     </TouchableWithoutFeedback>
    // )
   

    var showpopup = null;
    if(Timepop == true){
        showpopup = (
            <TimePopup 
                setTimepop={setTimepop}
                setDLTfilter={setDLTfilter}
                Locationvalue={Locationvalue}
                Dayvalue={Dayvalue}
                setTimevalue={setTimevalue}
                setSfilter={setSfilter}
                setTimetxt={setTimetxt}
                setSearchvalue={setSearchvalue}
            />
        )
    }else if(Locationpop == true){
        showpopup=(
            <LocationPopup 
                setLocationpop={setLocationpop}
                setDLTfilter={setDLTfilter}
                DLTfilter={DLTfilter}
                Locationvalue={Locationvalue}
                Timevalue={Timevalue}
                Dayvalue={Dayvalue}
                setLocationvalue={setLocationvalue}
                setSfilter={setSfilter}
                setLocationtxt={setLocationtxt}
                setSearchvalue={setSearchvalue}
            />
        )
    }else if(Daypop == true){
        showpopup=(
            <DayPopup 
                setTimepop={setTimepop}
                setDLTfilter={setDLTfilter}
                setDaypop={setDaypop}
                setDayvalue={setDayvalue}
                Locationvalue={Locationvalue}
                Timevalue={Timevalue}
                Dayvalue={Dayvalue}
                setSfilter={setSfilter}
                setDaytxt={setDaytxt}
                setSearchvalue={setSearchvalue}
            />
        )
    }else {
        showpopup = null;
    }

    return(
        <View style={{flex:1, backgroundColor:'#ECE9E1'}}>       
            <Map 
                setTimepop={setTimepop}
                setLocationpop={setLocationpop}
                setDaypop={setDaypop}
                Timepop={Timepop}
                Daypop={Daypop}
                Locationpop={Locationpop}
                DLTfilter={DLTfilter}
                setDLTfilter={setDLTfilter}
                Sfilter={Sfilter}
                setSfilter={setSfilter}
                Timetxt={Timetxt}
                Daytxt={Daytxt}
                Locationtxt={Locationtxt}
                setSearchvalue={setSearchvalue}
                Searchvalue={Searchvalue}
            />

            <List 
                DLTfilter={DLTfilter}
                Sfilter={Sfilter}
            />

            <MenuBar
            map='#F4B869'
            home='#74726C'
            fav='#74726C'
            profile='#74726C'/>

            {showpopup}

        </View>

    )
}

export default MapPage;
