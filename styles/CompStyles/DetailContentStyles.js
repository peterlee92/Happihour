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
        color:'white'
    },
    price:{
        color:"#ffd96f",
        position:'absolute',
        right:0
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
    }
})

export default styles;