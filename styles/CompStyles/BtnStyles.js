import {StyleSheet} from 'react-native';

const btnStyles =  StyleSheet.create({
    btnCont:{
        justifyContent:"center",
        alignItems:"center",
        flex:.5,
        marginTop:20,
    },
    mainCont:{
        justifyContent:"center",
        alignItems:"center",
    },
    solidBtn:{
        //marginTop:20,
        backgroundColor:"#f4e664",
        width:250,
        padding:10,
        borderRadius:10,
        marginLeft:10, 
    },
    solidText:{
        fontFamily:"Nunito-Semibold",        
        textAlign:'center',
        fontSize:14,
        letterSpacing:1.25,
        color:"#C23A37"
    },
    nextText:{
        fontFamily:"Nunito-Semibold",        
        textAlign:'center',
        fontSize:14,
        letterSpacing:1.25,
    },
    roundBtn:{
        width:40,
        height:40,
        borderRadius:80,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        margin: 5,
    },
    addBtn:{
        margin:10,
        color: "#07191E",
        backgroundColor:"#43B05C",
        borderRadius:70, 

    },
    addText:{
        color:"white",
        fontFamily:"Nunito-Bold"
    },
    addItem:{
        backgroundColor:"#43B05C",
        width:40,
        height:40,
        borderRadius:80,
        justifyContent:"center",
        alignItems:"center",
        margin: 5,
    },
    removeBtn:{
        margin:10,
        color: "#07191E",
        backgroundColor:"#ec3f3f",
        borderRadius:70,        
    },
    addHour:{
        margin:10,
        color: "#ffffff",
        backgroundColor:"#43B05C",
        borderRadius:50
    },
    timeBtn:{
        width:80,
        height: 30,
        borderRadius:5,
        margin:10,
        backgroundColor:"rgba(255,255,255,.3)",
        padding:5,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },
    timeText:{
        fontSize:16,
        fontFamily:"Nunito-Regular",        
    },
    caretIcon:{
        position:"absolute",
        right:0,
        bottom:-3
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
        fontFamily:"Nunito-Regular",        
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
        letterSpacing:5,
        fontFamily:"Nunito-Regular",        
    },    
})

export default btnStyles;