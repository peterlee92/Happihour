import {StyleSheet} from 'react-native';

const btnStyles =  StyleSheet.create({
    btnCont:{
        justifyContent:"center",
        alignItems:"center",
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
    removeBtn:{
        margin:10,
        color: "#07191E",
        backgroundColor:"#ec3f3f",
        borderRadius:70,        
    },

})

export default btnStyles;