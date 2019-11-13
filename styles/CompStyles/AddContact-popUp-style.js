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
        fontSize:19,
        color:'white',
        textAlign:'center',
        marginBottom:5,
        opacity:0.8,
        marginBottom:20,
        paddingTop:10
    },
    msgContainer:{
        backgroundColor:"#061A20",
        justifyContent:'center',
        alignItems:"center",
        height:400,
        width:'80%',
        padding:15,
        borderRadius:30
    },
    input:{
        width:'80%',
        height:40,
        backgroundColor:'#828B82',
        margin:10,
        borderRadius:10,
        paddingLeft:10
    },
    button:{
        width:"80%",
        height: 40,
        backgroundColor:"#F3E864",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
        flexDirection:"row"
    }
})

export default style;