import {StyleSheet} from 'react-native';

const style =  StyleSheet.create({
    bg:{
        width:"100%",
        height:"100%",
        resizeMode:"cover"
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        padding:50
    },
    helpers:{
        fontSize:50,
        color:"#f4e664",
    },
    icon:{
        margin:10,
        color: "black",
        backgroundColor: "white"
    },
    heading:{
        fontSize:22,
        color:"#f4e664",
    },
    psa:{
        marginTop:10,
        fontSize:16,
        color:"white",
        lineHeight:20
    },
    solidBtn:{
        marginTop:20,
        backgroundColor:"#f4e664",
        width:250,
        padding:10,
        borderRadius:10 
    },
    solidText:{
        textAlign:'center',
        fontSize:14,
        letterSpacing:3
    },
    outlineBtn:{
        marginTop:20,
        borderColor:"#f4e664",
        borderWidth:3,
        width:247,
        padding:10,
        borderRadius:10 
    },
    exitText:{
        textAlign:'center',
        fontSize:14,
        color:"#f4e664",
        letterSpacing:5
    }
})

export default style;