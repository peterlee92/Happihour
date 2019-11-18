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
        marginVertical:50,
        marginBottom:-10,
        flex:2
    },
    logo:{
        width:300,
        height:100,
        resizeMode:'contain'
    },
    newaccountContainer:{
        alignItems:'center',
        flex:2,
        // backgroundColor:'yellow'
        paddingVertical:20,
        bottom:-40
    },
    dontTxt:{
        color:"rgba(255,255,255,0.4)",
        fontSize:20,
        letterSpacing:1,
        fontFamily:"Nunito-Regular",
    },
    createTxt:{
        color:"#f7aa4b",
        letterSpacing:1,
        fontSize:20,
        fontFamily:"Nunito-Regular",
        marginBottom:30
    }
})

export default styles;