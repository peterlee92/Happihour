import React, {useState, useEffect} from 'react';
import {View, FlatList, ScrollView, SafeAreaView, Image, ImageBackground, AsyncStorage} from 'react-native';
import FavItems from '../comps/FavItems';
import MenuBar from '../comps/MenuBar';
import FavPopup from '../comps/FavPopup';

function FavPage(){
    const [fav_restaurants, Setfav_restaurants] = useState([]);
    const [Refresh, SetRefresh] = useState(false);
    const [showPopup, setshowPopup] = useState();

    var Favhead= null;
  
    async function getInfo(){
      var data = await AsyncStorage.getItem("userinfo");
      data = JSON.parse(data);
      var id = Number(data.info[0]['user_id'])
      getFavRestaurants(id)
      console.log("userid",id);
    }

    var getFavRestaurants=async(id)=>{
//use ip addres
        let response = await fetch('http://Happihour-env.punbp2gfmb.us-east-2.elasticbeanstalk.com/Favourites.php',{

            method:'POST',
            headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id : id
            })
        })
                                    
        // data echoed out in php
        let data = await response.json();
        console.log(data)
        if(data == "wrong"){
            console.log('no favourites')
          Setfav_restaurants([]);
            setshowPopup(true);
        }else{
            Setfav_restaurants(data);   
        }
            
    }

    if(showPopup == true){
        console.log('Popup')
        Favhead = (
            <FavPopup />
        )
    }else{
        Favhead = null;
    }
    useEffect(()=>{
        getInfo()
    },[Refresh])
    

    return(
        <View style={{ height: "100%", backgroundColor:"#0E1617"}}>
            {/* <Image  source={require('../imgs/Flow_Header.svg')} /> */}
            <ImageBackground source={require('../imgs/bg1.png')} style={{width:'100%', height:'100%'}}>
                <Image source={require('../imgs/Flow_Header.png')} style={{width:'100%', height:50}} />
            <View style={{flex:9}}>
                <SafeAreaView>
                <ScrollView>
                    {
                        fav_restaurants.map((obj,i)=>{
                            return <FavItems 
                                key={i}
                                name={obj.name}
                                address={obj.address}
                                img1={obj.img1}
                                img2={obj.img2}
                                SetRefresh={SetRefresh}
                                Refresh={Refresh}
                            />
                        })
                    }

                </ScrollView>
                </SafeAreaView>
             </View>
             <MenuBar 
                map='#74726C'
                home='#74726C'
                fav='#F4B869'
                profile='#74726C'/>
             </ImageBackground>
             {Favhead}
        </View>
    )
}
export default FavPage;