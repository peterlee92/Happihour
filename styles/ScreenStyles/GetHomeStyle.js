import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#061a20",
        height:"100%",
        width:'100%',
        paddingBottom:50
    },
    GHS:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        letterSpacing:3,
        textAlign:'center'
    },
    Img:{
        width:300,
        height:150,
        margin:50,
        marginBottom:30
    },
    Img2:{
        width:200,
        height:150,
        margin:50,
        marginBottom:30
    },
    Img3:{
        width:150,
        height:150,
        margin:50,
        marginBottom:30
    },
    position:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        width:"70%",
        height:150,
        margin:10,
        marginBottom:40,
        borderRadius:10
    },
    rows:{
        flexDirection:"row"
    }

})

export default style;