import React, {useState} from 'react';
import {View, Image} from 'react-native';
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
    const [DLTfilter, setDLTfilter] = useState([]);

    var showpopup = null;
    if(Timepop == true){
        showpopup = (
            <TimePopup 
                setTimepop={setTimepop}
                setDLTfilter={setDLTfilter}
                Locationvalue={Locationvalue}
                Dayvalue={Dayvalue}
                setTimevalue={setTimevalue}
            />
        )
    }else if(Locationpop == true){
        showpopup=(
            <LocationPopup 
                setLocationpop={setLocationpop}
                setDLTfilter={setDLTfilter}
                Locationvalue={Locationvalue}
                Timevalue={Timevalue}
                Dayvalue={Dayvalue}
                setLocationvalue={setLocationvalue}
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
            />

            <List />

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
