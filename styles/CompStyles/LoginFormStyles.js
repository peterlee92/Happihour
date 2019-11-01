import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    wrapcontainer:{
        flex:3.5,
        justifyContent:'center'
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
        color:'white'
    },
    loginButContainer:{
        alignItems:'center'
    },
    loginBut:{
        backgroundColor:"#f4e664",
        width:'80%',
        padding:10,
        borderRadius:10        
    },
    loginTxt:{
        textAlign:'center',
        fontSize:20,
        letterSpacing:2,
        fontWeight:'bold'
    }
})

export default styles;