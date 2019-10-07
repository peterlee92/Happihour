import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    topContainer:{
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:10,
        justifyContent:'center'
    },
    backBut:{
        width:30,
        height:30,
        resizeMode:'contain'
    },
    RSname:{
        color:'white',
        fontSize:25,
        letterSpacing:3,
        textAlign:'center',
        width:280
    },
    favIcon:{
        width:30,
        height:30,
        resizeMode:'contain'
    },
    address:{
        color:'white',
        textAlign:'center',
        fontSize:16,
        marginBottom:10
    },
    HTcontainer:{
        backgroundColor:"#ffd96f"
    },
    HT:{
        fontSize:25,
        textAlign:'center',
        padding:10
    }
})

export default styles;