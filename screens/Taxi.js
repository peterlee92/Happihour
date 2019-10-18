import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import style from '../styles/ScreenStyles/TaxiStyles';

function Taxi(){
    return(
        <View style={style.container}>
            <View style={style.rows}>
                <TouchableOpacity style={style.position}>
                    <Image style={style.Img}/>
                    <View>
                        <Image style={style.img2} />
                        <Text style={style.GHS}>TAXI Vancouver</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.position}>
                    <Image style={style.Img}/>
                    <View>
                        <Image style={style.img2} />
                        <Text style={style.GHS}>Yellow Cab</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={style.rows}>
                <TouchableOpacity style={style.position}>
                    <Image style={style.Img}/>
                    <View>
                        <Image style={style.img2} />
                        <Text style={style.GHS}>Black Top Cabs</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.position}>
                    <Image style={style.Img}/>
                    <View>
                        <Image style={style.img2} />
                        <Text style={style.GHS}>Maclure's Cabs</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Taxi;