import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container:{
        flex:10.5
    },
    buttonContainer:{
        flexDirection:'row',
        position:'absolute',
        justifyContent:'center',
        left:0,
        right:0,
        elevation:5,
        marginTop:90
    },
    timebutton:{
        backgroundColor: "rgba(0,0,0,0.6)",
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        paddingHorizontal:28,
        borderRadius:30,
        marginRight:40,
        elevation:10,
        zIndex:20

    },
    locationbutton:{
        backgroundColor: "rgba(0,0,0,0.6)",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:8,
        paddingHorizontal:10,
        borderRadius:30,
        elevation:10,
        zIndex:20
    },
    buttontxt:{
        color:"#f4e664",
        fontSize:15,
        letterSpacing:1,
        fontFamily:"Nunito-Regular",        
    },
    map:{
        width:'100%',
        height:'100%',
        zIndex:-10,
        elevation:-10
    },
    calloutView:{
        backgroundColor:'white',
        position:'absolute',
        top:-350
    }
})

export default styles;