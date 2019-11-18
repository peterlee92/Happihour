import React from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/GetHomeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

function GetHome(){
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
                    position:'absolute'}}
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
                        <FontAwesomeIcon 
                            icon="bus-alt" 
                            size={100} 
                            color="white" 
                            style={style.Img}
                        />
                    </View>
                    <Text style={style.subGHS}>Get Home</Text>
                </TouchableOpacity>
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
                    style={[
                        style.position, 
                        {backgroundColor:'#BF3B37'
                    }]}
                >
                    <View style={style.img3}>
                        <FontAwesomeIcon 
                            icon="mobile-alt" 
                            size={100} 
                            color="white" 
                            style={style.Img3}
                        />
                    </View>
                    <Text style={[style.subGHS, {marginBottom:-15}]}>Emergency Contact</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={style.position}>
                    <Image style={style.Img}/>
                    <Text style={style.GHS}>911</Text>
                </TouchableOpacity> */}
            </View>
            </View>
            </ImageBackground>
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