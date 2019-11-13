import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    menuContainer:{
        paddingVertical:20,
        paddingHorizontal:30
    },
    menu:{
        color:"#ffd96f",
        fontSize:20,
        marginBottom:20
    },
    txtContainer:{
        flexDirection:'row'
    },
    txt:{
        color:'white',
        fontFamily:"Nunito-Regular",        
    },
    price:{
        color:"#ffd96f",
        position:'absolute',
        right:0,
        fontFamily:"Nunito-Regular",        
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'center'    
    },
    buttons:{
        backgroundColor:'orange',
        padding:10,
        borderRadius:10,
        margin:20,
        flexDirection:'row'
    },
    map:{
        width:"100%",
        height:300
    }
})

export default styles;