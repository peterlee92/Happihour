import {StyleSheet} from 'react-native';

const style =  StyleSheet.create({
    bg:{
        width:370,
        height:480,
        resizeMode: "contain"
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        padding:20,
        flex:1,
        marginTop:50
    },
    flexCenter:{
        justifyContent:"center",
        alignItems:"center",
    },
    logoRow:{
        flex:1,
        marginTop:-30
    },
    helpers:{
        fontSize:34,
        color:"#FFB65A",
        textAlign:"center",
        letterSpacing:.25
    
    },
    icon:{
        
        marginBottom:20,
        color: "#061A20",
        backgroundColor: "#E3EAF4",
        borderRadius:10,
        marginTop:-40
    },
    heading:{
        fontSize:21,
        color:"#F1E578",
        textAlign:"center",
        fontFamily:"Nunito-Regular",        
    },
    psaRow:{
        flex:3,
        justifyContent:"center",
        alignItems:"center",
        marginTop:40
        

    },
    psa:{
        textAlign:"center",
        marginTop:10,
        fontSize:18,
        color:"white",
        lineHeight:30,
        fontFamily:"Nunito-Regular",        
    },
    btnRow:{
        flex:1,
        marginBottom:60
    },
    yellowBtn:{
        marginTop:25,
        backgroundColor:"#F4E664",
        width:250,
        padding:5,
        borderRadius:10 
    },
    redText:{
        textAlign:'center',
        fontSize:14,
        letterSpacing:3,
        color:"#C03B37",
        fontFamily:"Nunito-Bold",        
    },
    orangeBtn:{
        marginTop:20,
        backgroundColor:"#FFB65A",
        width:250,
        padding:5,
        borderRadius:10 
    },
    btnText:{
        textAlign:'center',
        fontSize:14,
        color:"#2E3736",
        letterSpacing:5,
        fontFamily:"Nunito-Bold",        
    },
})

export default style;