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
        alignContent:"center",
        padding:50,
        flex:1
    },
    flexCenter:{
        justifyContent:"center",
        alignItems:"center",
    },
    logoRow:{
        flex:1,
    },
    helpers:{
        fontSize:34,
        color:"#FFB65A",
        textAlign:"center",
        letterSpacing:.25,
    },
    icon:{
        margin:50,
        marginLeft:"30%",
        color: "#061A20",
        backgroundColor: "#E3EAF4",
        borderRadius:10
    },
    heading:{
        fontSize:20,
        color:"#f4e664",
        textAlign:"center",
    },
    psaRow:{
        flex:3,
        justifyContent:"center",

    },
    psa:{
        textAlign:"center",
        marginTop:10,
        fontSize:16,
        color:"white",
        lineHeight:30
    },
    btnRow:{
        flex:1
    },
    yellowBtn:{
        marginTop:20,
        backgroundColor:"#F4E664",
        width:250,
        padding:10,
        borderRadius:10 
    },
    redText:{
        textAlign:'center',
        fontSize:14,
        letterSpacing:3,
        color:"#C03B37",
    },
    orangeBtn:{
        marginTop:20,
        backgroundColor:"#FFB65A",
        width:250,
        padding:10,
        borderRadius:10 
    },
    btnText:{
        textAlign:'center',
        fontSize:14,
        color:"#2E3736",
        letterSpacing:5
    },
})

export default style;