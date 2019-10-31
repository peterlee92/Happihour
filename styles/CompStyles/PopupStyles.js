import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container:{
        flex:1
    },
    img:{
        width:130,
        height:100,
        resizeMode:'contain'
    },
    nameContainer:{
        backgroundColor:'rgba(0,0,0,0.8)', 
        position:'absolute', 
        bottom:0    
    },
    name:{
        color:'white', 
        letterSpacing:3
    },
    timeContainer:{
        backgroundColor:'black', 
        padding:5
    }
})

export default styles;