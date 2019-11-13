import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'center'
    },
    header:{
        width:'100%',
        flex:0.8
    },
    logoContainer:{
        alignItems:'center',
        marginVertical:30
    },
    logo:{
        width:300,
        height:100,
        resizeMode:'contain'
    },
    newaccountContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    dontTxt:{
        color:"rgba(255,255,255,0.4)",
        fontSize:14,
        letterSpacing:2,
        fontFamily:"Nunito-Regular",
    },
    createTxt:{
        color:"#ffd96f",
        letterSpacing:2,
        fontSize:18,
        fontFamily:"Nunito-Regular",
    }
})

export default styles;