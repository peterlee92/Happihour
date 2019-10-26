import {StyleSheet} from 'react-native';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

const style = StyleSheet.create({
    container:{
        position:'absolute',
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'column',
        width:'80%',
        // height:'100%'
    },
    msg:{
        fontSize:16,
        color:'#242927',
        textAlign:'center',
        fontWeight:'bold'
    },
    msgContainer:{
        backgroundColor:"white",
        justifyContent:'center',
        alignItems:"center",
        height:125,
        width:'100%',
        padding:15
    },
    yes:{
        fontSize:21,
        color:"#242927"
    },
    yesContainer:{
        backgroundColor:"#EDE479",
        justifyContent:"center",
        alignItems:"center",
        width:'50%',
        height: 60
    },
    no:{
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
        flexDirection:'row'
    }

})

export default style;