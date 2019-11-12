import React from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/GetHomeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

function GetHome(){
    return(
        <View style={style.container}>
            <ImageBackground source={require('../imgs/popupBG2.png')} resizeMode='cover' style={{width:'100%', flex:10.5, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../imgs/Flow_Header.png')} style={{width:'100%', height:80, position:'absolute', top:0}} />

            <Text style={[style.GHS, {marginBottom:30}]}>Let's Get You Home Safe</Text>
            <View style={style.rows}>
                <TouchableOpacity style={[style.position, {backgroundColor:'#234378'}]} onPress={()=>(Actions.transit())}>
                    <View style={style.img}>
                        <FontAwesomeIcon icon="bus-alt" size={100} color="white" style={style.Img}/>
                    </View>
                    <Text style={style.GHS}>GET HOME</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={[style.position, {backgroundColor:'#D1C74B'}]} onPress={()=>(Actions.taxi())}>
                    <View style={style.img2}>
                        <FontAwesomeIcon icon="taxi" size={100} color="white" style={style.Img2}/>
                    </View>
                    <Text style={style.GHS}>TAXI</Text>
                </TouchableOpacity> */}
            </View>
            <View style={style.rows}>
                <TouchableOpacity style={[style.position, {backgroundColor:'#9D403C'}]}>
                    <View style={style.img3}>
                        <FontAwesomeIcon icon="user" size={100} color="white" style={style.Img3}/>
                    </View>
                    <Text style={[style.GHS, {marginBottom:-15}]}>EMERGENCY CONTACT</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={style.position}>
                    <Image style={style.Img}/>
                    <Text style={style.GHS}>911</Text>
                </TouchableOpacity> */}
            </View>
            </ImageBackground>
            <MenuBar />
        </View>
    )
}

export default GetHome;