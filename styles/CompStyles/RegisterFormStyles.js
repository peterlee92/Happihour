import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    wrapContainer:{
        flex:5
    },
    barTxtContainer:{
        alignItems:'center',
        marginBottom:20,
        marginTop:-20,
    },
    barTxt:{
        color:'rgba(255,255,255,0.5)',
        fontSize:16,
        fontFamily:"Nunito-Regular",        
    },
    inputContainer:{
        width:'100%', 
        marginVertical:'3%',
        height:50,
        justifyContent:'center',
        flexDirection:'row',
        paddingHorizontal:20
    },
    inputIcon:{
        position:'absolute',
        left:60
    },
    input:{
        width:'80%',
        height:40,
        paddingLeft:60,
        fontSize:18,
        borderBottomWidth:2,
        color:'white',
        fontFamily:"Nunito-Regular",        
    },
    signupContainer:{
        alignItems:'center',
        marginTop:50
    },
    signupBut:{
        backgroundColor:"#f4e664",
        width:'80%',
        padding:10,
        borderRadius:10 
    },
    signupText:{
        textAlign:'center',
        fontSize:20,
        letterSpacing:2,
        //fontWeight:'bold',
        fontFamily:"Nunito-Bold",        
    }
})

export default styles;