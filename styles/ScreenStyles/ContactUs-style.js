import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        width:'100%',
        height:'100%'
    },
    input:{
        flexDirection:'row',
        width:"60%",
        marginVertical:8
    },
    inputTxt:{
        fontSize:14,
        color:"grey",
        marginLeft:10,
        textAlign:"left"
    },
    inputLine:{
        width:'60%',
        height:1,
        backgroundColor:"darkgrey",
        opacity:0.5,
        marginBottom:25
    },
    yellowLine:{
        width:'60%',
        height:1,
        backgroundColor:"#EDE479",
        opacity:0.5,
        marginBottom:25
    },
    header:{
        backgroundColor:'#0D1617',
        width:'100%',
        height:75,
        justifyContent:"center"
    },
    back:{
        flexDirection:'row'
        // alignItems:"center"
    },
    edit:{
        fontSize:18,
        color:"white",
        marginLeft:20,
        letterSpacing:4
    },
    button:{
        width:"60%",
        height: 40,
        backgroundColor:"#EDE479",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:150,
        flexDirection:"row"
    }
})

export default style;