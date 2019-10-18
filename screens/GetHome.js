import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import MenuBar from '../comps/MenuBar';
import style from '../styles/ScreenStyles/GetHomeStyle';

function GetHome(){
    return(
        <View style={style.container}>
            <Text style={style.GHS}>Let's Get You Home Safe</Text>
            <View style={style.rows}>
                <TouchableOpacity style={style.position}>
                    <Image style={style.Img}/>
                    <Text style={style.GHS}>Transit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.position}>
                    <Image style={style.Img}/>
                    <Text style={style.GHS}>Taxi</Text>
                </TouchableOpacity>
            </View>
            <View style={style.rows}>
                <TouchableOpacity style={style.position}>
                    <Image style={style.Img}/>
                    <Text style={style.GHS}>Call A Friend</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.position}>
                    <Image style={style.Img}/>
                    <Text style={style.GHS}>911</Text>
                </TouchableOpacity>
            </View>
            <MenuBar />
        </View>
    )
}

export default GetHome;