import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'center',
        fontFamily:"Nunito-Bold"
    },
    input:{
        margin:15,
        height:60,
        padding:20,
        fontSize:20,
        backgroundColor:'rgba(255,255,255,0.8)',
        fontWeight:'bold',
        borderRadius:10
    },
    signupContainer:{
        alignItems:'center',
        marginTop:20
    },
    signup:{
        backgroundColor:"#f4e664",
        width:140,
        padding:10,
        borderRadius:15  
    },
    signupText:{
        textAlign:'center'
    },
    returnContainer:{
        alignItems:'center',
        marginTop:30
    },
    returnText:{
        textAlign:'center',
        color:"rgba(255,255,255,0.7)",
        letterSpacing:2.5
    }

})

export default styles;