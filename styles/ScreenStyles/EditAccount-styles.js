import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        // justifyContent:"center",
        alignItems:"center",
        width:'100%',
        height:'100%',
    },
    jane:{
        height:60,
        width:'90%',
        backgroundColor:'#878980',
        alignItems:'center',
        flexDirection:'row',
        borderRadius:10,
        marginBottom:40,
        // marginTop:40
    },
    janeTxt:{
        fontSize:28,
        color:"white",
        letterSpacing:2,
        fontFamily:"Nunito-Regular",
        marginBottom:15        
    },
    janeSubTxt:{
        fontSize:14,
        color:"white",
        letterSpacing:2,
        fontFamily:"Nunito-Regular",        
    },
    janeImg:{
        width:120,
        height:120,
        borderRadius:60,
        borderWidth:5,
        borderColor:"#6b6b6b",
        marginHorizontal:10,
        marginTop:30,
        marginBottom:20
    },
    input:{
        flexDirection:'row',
        width:"80%",
        alignItems:'center',
        marginBottom:-4,
    },
    inputTxt:{
        fontSize:20,
        color:"white",
        marginLeft:10,
        textAlign:"left",
        fontFamily:"Nunito-Regular",        
    },
    inputLine:{
        width:'80%',
        height:1,
        backgroundColor:"darkgrey",
        opacity:0.5,
        marginBottom:10
    },
    yellowLine:{
        width:'80%',
        height:1,
        backgroundColor:"#EDE479",
        opacity:0.5,
        marginBottom:50
    },
    header:{
        backgroundColor:'#0B1A1F',
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
        letterSpacing:4,        
        fontFamily:"Nunito-Regular",
    },
    button:{
        width:"80%",
        height: 40,
        backgroundColor:"#f4e664",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10,
        flexDirection:"row"
    }
})

export default style;