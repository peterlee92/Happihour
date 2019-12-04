import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import style from '../styles/CompStyles/FavItemsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from '../styles/AppStyle';
import {Actions} from 'react-native-router-flux';

function FavItems(props) {

    var Image1 = {uri:props.img1}
    var Image2 = {uri:props.img2}

    const [userid, Setuserid] = useState();
    
    async function getInfo(){
        var data = await AsyncStorage.getItem("userinfo");
        data = JSON.parse(data);
        var id = Number(data.info[0]['user_id'])
        Setuserid(id)
        console.log("userid",id);
      }

    var DeleteFav=async()=>{
        let Favresponse = await fetch('http://Happihour-env.punbp2gfmb.us-east-2.elasticbeanstalk.com/DeleteFav.php',{

            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id : userid,
                restaurantname:props.name

            })
        })
    }


    useEffect(()=>{      
        getInfo();
    },[])


    return(
        <View style={style.position}>
            <View style={style.container}>
                <View style={style.imgPosition}>
                    <Image 
                        source={Image1}
                        style={style.img}
                    />
                    <Image 
                        source={Image2} 
                        style={style.img2}
                    />
                    <TouchableOpacity 
                    style={style.favImg}
                    onPress={()=>{
                        props.SetRefresh(!props.Refresh)
                        DeleteFav()
                    }}>
                        <FontAwesomeIcon icon='heart' color={'red'} size={22} />
                    </TouchableOpacity>
                </View>
                    <TouchableOpacity 
                        style={style.favContainer}
                        onPress={()=>Actions.detail({text:props.name})}
                    >
                        <View>
                            <Text style={style.favTitle}>{props.name}</Text>
                            <Text style={style.favDescr}>{props.address}</Text>
                        </View>
                        <View>
                            <FontAwesomeIcon 
                                icon="chevron-right" 
                                color={'#ffef86'} 
                                size={22} 
                                style={{marginRight:10}}/>
                        </View>
                    </TouchableOpacity>
            </View>
            
        </View>
    )
}
export default FavItems;