import {StyleSheet} from 'react-native';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

const style = StyleSheet.create({
    container:{
        position:'absolute',
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'column',
        width:'100%',
        height:'100%',
        marginTop:-100
    },
    msg:{
        fontSize:16,
        color:'#242927',
        textAlign:'center',
        //fontWeight:'bold'
        fontFamily:"Nunito-Bold",                
    },
    msgContainer:{
        backgroundColor:"white",
        justifyContent:'center',
        alignItems:"center",
        height:125,
        width:'80%',
        padding:15
    },
    yes:{
        fontSize:21,
        color:"#242927",
        fontFamily:"Nunito-Regular",        
    },
    yesContainer:{
        backgroundColor:"#EDE479",
        justifyContent:"center",
        alignItems:"center",
        width:'50%',
        height: 60
    },
    no:{
        fontFamily:"Nunito-Regular",                
        fontSize:21,
        color:"white"
    },
    noContainer:{
        backgroundColor:"#242927",
        justifyContent:"center",
        alignItems:"center",
        width:'50%',
        height:60
    },
    answer:{
        flexDirection:'row',
        width:'80%'
    }

})

export default style;