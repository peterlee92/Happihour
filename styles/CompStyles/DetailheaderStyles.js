import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container:{
        height:300,
        resizeMode:'contain'
    },
    RSContainer:{
        padding:10,
        flexDirection:'row'
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
        //fontWeight:'bold'
        fontFamily:"Nunito-Bold",        
    },
    directionContainer:{
        position:'relative',
        paddingLeft:10,
        alignItems:'flex-start'
    },
    directionBut:{
        flexDirection:'row',
        backgroundColor:'#e6dc60',
        borderRadius:5,
        padding:5,
       
    },
   
    HTcontainer:{
        backgroundColor:"#e6dc60",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position:'absolute',
        bottom:0,
        width:'100%'
    },
    HT:{
        fontSize:23,
        textAlign:'center',
        padding:10,
        fontFamily:"Nunito-Bold",        
    }
})

export default styles;