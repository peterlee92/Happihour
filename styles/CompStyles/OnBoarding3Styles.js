import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        flex:1
    },
    signuptxt:{
        color:'white',
        fontSize:30,
        marginBottom:20
    },
    connect:{
        width:'100%',
        flex:3
    },
    content:{
       justifyContent:'center',
       alignItems:'center',
       padding:30
    },
    contenttxt:{
        fontSize:20,
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