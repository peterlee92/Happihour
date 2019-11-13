import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
    bg:{
        flex:1,
        justifyContent:"center",
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        padding:20
    },
    title:{
        fontFamily:"Nunito-Regular",
        fontSize:20,
        color:"#FFFFFF",
        letterSpacing:2.5
    },
    icon:{
        margin:10,
        color: "#07191E",
        backgroundColor:"rgba(244, 230, 100, .2)",
        borderRadius:5,
    },
    subtitle:{
        fontFamily:"Nunito-Semibold",
        fontSize:16,
        letterSpacing:.15,
        color:"white",
    },
    flow:{
        width:"100%",
        flex:0.125,
    },
    backBtn:{
        margin:10,
    },
    addBtn:{
        margin:10,
        color: "#07191E",
        backgroundColor:"#43B05C",
        borderRadius:70,        
    },
    overline:{
        fontFamily:"Nunito-Regular",
        fontSize:10,
        letterSpacing:1.5,
        color:"white",
        marginLeft:10,
    },  

})

export default styles;
