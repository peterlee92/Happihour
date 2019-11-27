import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        overflow:'hidden'
    },
    behappy:{
        width:'100%',
        flex:1
    },
    content:{
       justifyContent:'center',
       alignItems:'center',
       padding:30,
       flex:0.6
    },
    contenttxt:{
        fontSize:17,
        textAlign:'center',
        lineHeight:40,
        marginBottom:40 
    },
    letsgoBut:{
        backgroundColor:'#3D7B4E',
        padding:20,
        width:'100%',
        alignItems:'center',
        position:'absolute',
        bottom:0
    },
    letsgoTxt:{
        color:'white',
        fontSize:20
    },
    SkipTxt:{
        fontSize:17
    }
})

export default styles;