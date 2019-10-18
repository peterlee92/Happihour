import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        backgroundColor:"lightgrey",
        width:350,
        height:200,
        borderRadius:10
    },
    position:{
        justifyContent:"center",
        alignItems:"center",
        top:100,
        marginTop:10
    },
    favTitle:{
        fontSize:24,
        marginLeft:10,
        marginTop:10,
        paddingHorizontal:5
    },
    favDescr:{
        fontSize:14,
        marginLeft:10,
        paddingHorizontal:5,
        paddingBottom:10
    },
    img:{
        width:150,
        height:100,
    },
    imgPosition:{
        flexDirection:"row"
    },
    favImg:{
        width:20,
        height:20,
    }
})

export default style;