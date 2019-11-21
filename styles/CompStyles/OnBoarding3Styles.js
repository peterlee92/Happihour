import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    header:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F7A957',
        borderBottomEndRadius:400,
        borderBottomStartRadius:400,
        padding:30,
        width:800,
    },
    signuptxt:{
        color:'white',
        fontSize:30,
        marginBottom:20
    },
    connect:{
        resizeMode:'contain',
        width:'100%',
        height:250,
        marginBottom:20
    },
    content:{
       justifyContent:'center',
       alignItems:'center',
       padding:30
    },
    contenttxt:{
        fontSize:17,
        textAlign:'center',
        lineHeight:40,
        marginBottom:40 
    },
    NextBut:{
        backgroundColor:'#3D7B4E',
        padding:5,
        width:'80%',
        alignItems:'center',
        borderRadius:10,
        marginBottom:20,
        width:300
    },
    NextTxt:{
        color:'white',
        fontSize:20
    },
    SkipTxt:{
        fontSize:17
    }
})

export default styles;