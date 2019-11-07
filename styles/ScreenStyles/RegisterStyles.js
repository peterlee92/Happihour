import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'center',
        fontFamily:"Nunito-Bold"
    },
    header:{
        flex:0.8,
        width:'100%'
    },
    logoContainer:{
        alignItems:'center',
    },
    logo:{
        width:300,
        height:100,
        resizeMode:'contain',
        marginVertical:5
    },
    backBut:{
        position:'absolute',
        left:10,
        top:10
    }

})

export default styles;