import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width:'100%',
        height:'100%',
    },
    backBtn:{
        position:'absolute',
        top:10,
        left:10
    },
    overlay:{
        backgroundColor:'rgba(0,0,0,0.3)',
        width:'100%',
        height:'100%',
        position:'absolute'
    },
    txtInfo:{
        fontSize:16,
        color:'white',
        textAlign:'center',
        opacity:0.8
    },
    input:{
        flexDirection:'row',
        width:"80%",
        alignItems:'center',
        marginBottom:-4,
    },
    inputTxt:{
        fontSize:16,
        color:"grey",
        marginLeft:10,
        textAlign:"left",
        opacity:0.6
    },
    yellowLine:{
        width:'80%',
        height:2,
        backgroundColor:"#EDE479",
        opacity:0.6,
        marginBottom:50
    },
    button:{
        width:"80%",
        height: 40,
        backgroundColor:"#F3E864",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:12,
        flexDirection:"row",
        marginTop:200
    }
})

export default style;