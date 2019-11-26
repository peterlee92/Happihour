import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        backgroundColor:"#122832",
        width:350,
        height:150,
        borderRadius:10,
        marginVertical:5
    },
    favContainer:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        
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
        height:100,
        // backgroundColor:'red',
        borderTopLeftRadius:10
    },
    img2:{
        width:175,
        height:100,
        // backgroundColor:'blue',
        borderTopRightRadius:10
    },
    imgPosition:{
        flexDirection:"row"
    }
})

export default style;