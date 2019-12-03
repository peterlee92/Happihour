import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'center',
        fontFamily:"Nunito-Bold"
    },
    header:{
        flex:0.1,
        width:'100%'
    },
    logoContainer:{
        flex:.2,
        alignItems:'center',
    },
    logo:{
        flex:1,
        width:300,
        height:100,
        resizeMode:'contain',
        marginVertical:15
    },
    backBut:{
        position:'absolute',
        left:10,
        top:10
    }

})

export default styles;