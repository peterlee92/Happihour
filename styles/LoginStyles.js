import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'center'
    },
    happihourContainer:{
        alignItems:'center',
        marginBottom:40
    }, 
    happihour:{
        color:"#ffd96f",
        fontSize:60
    },
    rowsContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    row1:{
        color:"rgba(255,255,255,0.4)",
        margin:20,
        marginTop:20,
        marginBottom:40,
        letterSpacing:2.5
    },
    row2:{
        color:"rgba(255,255,255,0.4)",
        fontSize:18,
        letterSpacing:2,
        margin:10
    },
    row3:{
        color:"#ffd96f",
        letterSpacing:2,
        fontSize:25
    }
})

export default styles;