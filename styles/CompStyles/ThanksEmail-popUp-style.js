import {StyleSheet} from 'react-native';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

const style = StyleSheet.create({
    container:{
        position:'absolute',
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'column',
        width:'100%',
        height:'100%'
    },
    msg:{
        fontSize:16,
        color:'#242927',
        textAlign:'center',
        //fontWeight:'bold',
        fontFamily:"Nunito-Bold",        
        marginBottom:5
    },
    msgContainer:{
        backgroundColor:"white",
        justifyContent:'center',
        alignItems:"center",
        height:175,
        width:'80%',
        padding:15
    },
    thanks:{
        fontSize:36,
        marginBottom:5,
        fontFamily:"Nunito-Regular",        
    }
})

export default style;