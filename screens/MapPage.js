import React, {useState} from 'react';
import {View, Image} from 'react-native';
import Map from '../comps/Map';
import MenuBar from '../comps/MenuBar'
import styles from '../styles/ScreenStyles/MapPageStyles';
import TimePopup from '../comps/TimePopup';
import LocationPopup from '../comps/LocationPopup';



function MapPage(){

    const [Timepop, setTimepop] = useState(false);
    const [Locationpop, setLocationpop] = useState(false);
    const [R_name, setR_name] = useState();
    const [Tfilter, setTfilter] = useState([]);
    const [Lfilter, setLfilter] =useState([]);

    var showpopup = null;
    if(Timepop == true){
        showpopup = (
            <TimePopup 
                setTimepop={setTimepop}
                setTfilter={setTfilter}
                setR_name={setR_name}
            />
        )
    }else if(Locationpop == true){
        showpopup=(
            <LocationPopup 
                setLocationpop={setLocationpop} 
                setLfilter={setLfilter}
                setR_name={setR_name}
            />
        )
    }else {
        showpopup = null;
    }



    return(
        <View style={{flex:1}}>
            <Image 
                style={styles.header}
                source={require('../imgs/Flow_Header.png')}
            />          
            <Map 
                setTimepop={setTimepop}
                setLocationpop={setLocationpop}
                Tfilter={Tfilter}
                Lfilter={Lfilter}
                R_name={R_name}
            />
            <MenuBar />
            {showpopup}

            <MenuBar
            map='#F4B869'
            home='#74726C'
            fav='#74726C'
            profile='#74726C' />

        </View>
    )
}

export default MapPage;
