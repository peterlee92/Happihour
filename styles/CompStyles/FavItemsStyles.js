import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        backgroundColor:"rgba(18,40,50,1)",
        width:350,
        height:150,
        borderRadius:10,
        marginVertical:5,
    },
    favContainer:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        position:'absolute',
        bottom:0,
        left:0,
        backgroundColor:"rgba(18,40,50,0.8)",
        width:'100%'
        
    },
    position:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    favTitle:{
        fontSize:16,
        marginLeft:15,
        marginTop:5,
        paddingHorizontal:5,
        letterSpacing:1,
        color:"white",
        
        fontFamily:"Nunito-Bold",        
    },
    favDescr:{
        fontSize:10,
        marginLeft:15,
        paddingHorizontal:5,
        paddingBottom:10,
        marginTop:2,
        color:"white",
        fontFamily:"Nunito-Regular",        
    },
    img:{
        width:175,
        height:150,
        // backgroundColor:'red',
        borderTopLeftRadius:10
    },
    img2:{
        width:175,
        height:150,
        // backgroundColor:'blue',
        borderTopRightRadius:10
    },
    imgPosition:{
        flexDirection:"row"
    },
    favImg:{
        position:'absolute',
        right:0,
        top:0,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#E03A2F',
        borderRadius:20,
        width:35,
        height:35,
        marginRight:12,
        marginTop:12
    }
})

export default style;