import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    wrapcontainer:{
        flex:5,
        justifyContent:'center'
    },
    inputContainer:{
        width:'100%', 
        marginVertical:'2%',
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
        fontSize:20,
        borderBottomWidth:2,
        color:'white',
        fontFamily:"Nunito-Regular",        
    },
    loginButContainer:{
        alignItems:'center',
        marginTop:20
    },
    loginBut:{
        backgroundColor:"#f4e664",
        // width:'80%',
        // padding:10,
        // borderRadius:10 
        padding:5,
        width:'80%',
        alignItems: 'center',
        borderRadius:10,
        marginBottom:20,
        width:300
    },
    loginTxt:{
        textAlign:'center',
        fontSize:20,
        fontFamily:"Nunito-Bold", 
        color:'black',
        
          
    },
    forgottxt:{
        color:'rgba(255,255,255,0.4)"',
        fontSize:14,
        fontFamily:"Nunito-Regular",
    }
})

export default styles;