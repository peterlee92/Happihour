import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    menuContainer:{
        padding:20
    },
    menu:{
        color:"#F8D97E",
        fontSize:20,
        marginBottom:20
    },
    txtContainer:{
        flexDirection:'row'
    },
    txt:{
        color:'white',
        fontFamily:"Nunito-Regular",
        letterSpacing:2,  
        fontSize:17      
    },
    price:{
        color:"#F8D97E",
        position:'absolute',
        right:0,
        fontFamily:"Nunito-Regular", 
        fontSize:17       
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'center'    
    },
    button1:{
        backgroundColor:'#F8D97E',
        padding:10,
        flexDirection:'row',
        width:'50%',
        alignItems:'center'
    },
    button2:{
        backgroundColor:'#132932',
        padding:10,
        flexDirection:'row',
        width:'50%',
        alignItems:'center'
    },
    map:{
        width:"100%",
        height:300
    }
})

export default styles;