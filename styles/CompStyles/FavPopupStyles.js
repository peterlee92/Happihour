import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        position:'absolute'
    },
    wrapper:{
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginTop:60
    },
    heart:{
        width:50,
        height:50,
        resizeMode:'contain',
        marginBottom:15
    },
    txt:{
        fontFamily:"Nunito-Bold",
        fontSize:16,
        textAlign:'center',
        color:'white'
    }
})

export default styles;