import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    wrapContainer:{
        marginTop:10
    },
    barTxtContainer:{
        alignItems:'center',
        marginBottom:30,
        marginTop:-20,
    },
    barTxt:{
        color:'rgba(255,255,255,0.5)',
        fontSize:17,
        fontFamily:"Nunito-Regular", 
        fontWeight:"200",
        letterSpacing:.5,
        

    },
    inputContainer:{
        width:'100%', 
        marginVertical:'2%',
        height:50,
        justifyContent:'center',
        flexDirection:'row',
        paddingHorizontal:20,
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