import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        backgroundColor:"#122832",
        width:350,
        height:175,
        borderRadius:10,
        marginVertical:5
    },
    position:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    favTitle:{
        fontSize:16,
        marginLeft:15,
        marginTop:20,
        paddingHorizontal:5,
        color:"white",
        fontFamily:"Nunito-Regular",        
    },
    favDescr:{
        fontSize:12,
        marginLeft:15,
        paddingHorizontal:5,
        paddingBottom:10,
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
    },
    favImg:{
        position:'absolute',
        right:0,
        top:0,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"#F4B96A",
        // borderRadius:20,
        // width:40,
        // height:40,
        marginRight:12,
        marginTop:12
    }
})

export default style;