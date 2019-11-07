import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"flex-start",
        flex:1,
    },
    subtitle:{
        fontFamily:"Nunito-Semibold",
        fontSize:16,
        letterSpacing:.15,
        color:"white",
        marginLeft:10,
    },  
    overline:{
        fontFamily:"Nunito-Regular",
        fontSize:10,
        letterSpacing:1.5,
        color:"white",
        marginLeft:10,
    },   
    heading6:{
        fontFamily:"Nunito-Semibold",
        fontSize:20,
        letterSpacing:.15,
        color:"white",
        marginLeft:10,
        marginTop:15,
    },
    input:{
        width:250,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:5,
        margin:10,
        backgroundColor:"white",
        padding:15
    },
    icon:{
        margin:10,
        color: "#07191E",
        backgroundColor:"#FBB55A",
        borderRadius:5
    },
    menu:{
        flexDirection:"row",
    },
    nav:{
        justifyContent:"center",
        alignItems:"center",
    },
    day:{
        flexDirection:"row",
    },
    img:{
        width:175,
        height:100,
        resizeMode:'contain',
        margin:5
    },
    imgRow:{
        flexDirection:"row",
    }
})

export default styles;