import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    },
    map:{
        width:'100%',
        height:'100%'
    },
    calloutView:{
        backgroundColor:'white',
        position:'absolute',
        top:-350
    }
})

export default styles;