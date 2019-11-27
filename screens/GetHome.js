import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground, Linking} from 'react-native';
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/GetHomeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';
import AddContact from '../comps/AddContact-popUp';




function GetHome(){

    const [contactPop, setContactPop] = useState(false);


    var CheckUserInfo=async()=>{
        let response = await fetch('http://142.232.52.8/Happihour/Contact.php',{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    
        let data = await response.json()
        console.log(data);
        if(JSON.stringify(data) == 'none'){
            setContactPop(true);
        }else {
            Linking.openURL(data);
        }
    };

    var displayPop = null;

    if(contactPop == true){
        displayPop = <AddContact />
    } else {
        displayPop = null;
    }
    return(
        <View style={style.container}>
            <ImageBackground 
                source={require('../imgs/popupBG2.png')} 
                resizeMode='cover' 
                style={{
                    width:'100%', 
                    height:'100%', 
                    flex:10.5,
                    justifyContent:'center', 
                    alignItems:'center'}}
            >
            <View 
                style={{
                    width:'100%', 
                    height:'100%', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    backgroundColor:'rgba(10,25,31,0.6)', 
                    position:'absolute',
                }}
            >
            <Image 
                source={require('../imgs/Flow_Header.png')}  
                style={{
                    width:'100%', 
                    height:50, 
                    position:'absolute', 
                    top:0
                }} 
            />
            
            <Text style={[style.GHS, {marginBottom:30}]}>Let's Get You Home Safe</Text>
            <View style={style.rows}>
                <TouchableOpacity 
                    style={[
                        style.position, 
                        {backgroundColor:'#0C519F'
                    }]} 
                    onPress={()=>(Actions.transit())}
                >
                    <View style={style.img}>
                        <Image style={{width:100, height:100}} source={require('../imgs/home-icon-silhouette.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={style.subGHS}>Get Home</Text>
{/* 
                <TouchableOpacity style={[style.position, {backgroundColor:'#D1C74B'}]} onPress={()=>(Actions.taxi())}>
                    <View style={style.img2}>
                        <FontAwesomeIcon icon="taxi" size={100} color="white" style={style.Img2}/>
                    </View>
                    <Text style={style.GHS}>TAXI</Text>
                </TouchableOpacity> */}
            </View>
            <View style={style.rows}>
                <TouchableOpacity 
                    onPress={()=>{CheckUserInfo()}}
                    style={[
                        style.position, 
                        {backgroundColor:'#BF3B37',
                        marginTop:50
                    }]}
                >
                    <View style={style.img3}>
                        <Image style={{width:100, height:100}} source={require('../imgs/emergency.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={[style.subGHS, {marginBottom:-15}]}>Emergency Contact</Text>
            </View>
            </View>
            </ImageBackground>
            {displayPop}
            <MenuBar 
                map='#74726C'
                home='#F4B869'
                fav='#74726C'
                profile='#74726C'
            />
        </View>
    )
}

export default GetHome;