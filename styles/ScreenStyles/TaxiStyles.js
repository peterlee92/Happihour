import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        // justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(06,26,32,0.7)",
        height:"100%",
        width:'100%',
        paddingTop:50
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
        letterSpacing:4,
        fontFamily:"Nunito-Regular",
    },
    GHS:{
        color:"white",
        fontSize:18,
        fontFamily:"Nunito-Regular",
    },
    Img:{
        width:150,
        height:150,
        borderWidth:4,
        borderRadius:10
    },
    position:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        marginHorizontal:10
    },
    rows:{
        flexDirection:"row",
        marginVertical:20
    },
    iconTxt:{
        flexDirection:'row',
        marginTop:10,
        alignItems:"center",
        fontFamily:"Nunito-Regular",
    }

})

export default style;