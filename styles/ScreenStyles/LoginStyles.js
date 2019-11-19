import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'space-around',
    },
    header:{
        width:'100%',
        flex:0.3
    },
    logoContainer:{
        alignItems:'center',
        //marginVertical:50,
        //marginBottom:-10,
        flex:1
    },
    logo:{
        width:300,
        height:100,
        resizeMode:'contain',
        flex:1
    },
    newaccountContainer:{
        alignItems:'center',
        flex:1,
        // backgroundColor:'yellow'
        //paddingVertical:20,
        bottom:-125
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