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
        paddingVertical:20
    },
    dontTxt:{
        color:"rgba(255,255,255,0.4)",
        fontSize:14,
        letterSpacing:2
    },
    createTxt:{
        color:"#f7aa4b",
        letterSpacing:2,
        fontSize:18,
        marginBottom:30
    },
    forgottxt:{
        color:'#ffdd6b',
        fontSize:18
    }
})

export default styles;