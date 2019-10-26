import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        // justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#061a20",
        height:"100%",
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
        letterSpacing:4
    },
    GHS:{
        color:"white",
        fontSize:18
    },
    Img:{
        width:150,
        height:150,
        borderWidth:2,
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
        alignItems:"center"
    }

})

export default style;