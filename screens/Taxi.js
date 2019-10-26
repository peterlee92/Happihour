import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import style from '../styles/ScreenStyles/TaxiStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Actions} from 'react-native-router-flux';

function Taxi(){
    return(
        <View>
            <View style={style.header}>
                    <TouchableOpacity style={style.back} onPress={()=>(Actions.getHome())}>
                        <FontAwesomeIcon icon='arrow-left' size={24} color="#F3D27B" style={{marginLeft:10}}/>
                        <Text style={style.edit}>TAXI</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#F3D27B', width:'100%', height:5, position:'absolute', bottom:0}}></View>
            </View>
            <View style={style.container}>
                <View style={style.rows}>
                    <TouchableOpacity style={style.position}>
                        <Image style={[style.Img, {borderColor:'#C86D3B'}]}/>
                        <View style={style.iconTxt}>
                            <FontAwesomeIcon icon='phone-alt' color="white" style={{marginRight:5}}/>
                            <Text style={style.GHS}>TAXI Vancouver</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.position}>
                        <Image style={[style.Img, {borderColor:'#EDE652'}]}/>
                        <View style={style.iconTxt}>
                            <FontAwesomeIcon icon='phone-alt' color="white" style={{marginRight:5}}/>
                            <Text style={style.GHS}>Yellow Cab</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={style.rows}>
                    <TouchableOpacity style={style.position}>
                        <Image style={[style.Img, {borderColor:'#EDE652'}]}/>
                        <View style={style.iconTxt}>
                            <FontAwesomeIcon icon='phone-alt' color="white" style={{marginRight:5}}/>
                            <Text style={style.GHS}>Black Top Cabs</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.position}>
                        <Image style={[style.Img, {borderColor:'#21214D'}]}/>
                        <View style={style.iconTxt}>
                            <FontAwesomeIcon icon='phone-alt' color="white" style={{marginRight:5}}/>
                            <Text style={style.GHS}>Maclure's Cabs</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Taxi;