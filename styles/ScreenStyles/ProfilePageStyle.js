import {StyleSheet} from 'react-native';
import { whileStatement } from '@babel/types';

const style = StyleSheet.create({
    options:{
        color:"dimgrey",
        fontSize:16,
        flex:1,
        marginLeft:15,
        //fontWeight:'bold',
        fontFamily:"Nunito-Bold",
        letterSpacing:1
    },
    titles:{
        color:"white",
        fontSize:14,
        letterSpacing:2,
        marginLeft:10,
        fontFamily:"Nunito-Regular",
        // marginBottom:10,
        // marginTop:5,
    },
    SignOutTitles:{
        color:"black",
        fontSize:18,
        fontWeight:'700',
        fontFamily:"Nunito-Bold",
        letterSpacing:3
    },
    container:{
        justifyContent:"center",
        height:"100%",
        width:'100%',
        // backgroundColor:"#E4A664",
        alignItems:"center",
        flex:9
    },
    name:{
        color:"white",
        fontSize:40,
        letterSpacing:5,
        marginTop:-15,
        fontFamily:"Nunito-Regular",
        // fontWeight:'200'
    },
    atName:{
        color:'#F4B869',
        fontSize:18,
        fontFamily:"Nunito-Regular",
    },
    settings:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal: 10
    },
    avatar:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        backgroundColor:'#3f5485',
        width:700,
        height:400,
        borderWidth:0
        // borderColor:'#404332',
        // borderBottomLeftRadius:350,
        // borderBottomRightRadius:350
    },
    icons:{
        width:20,
        height:20
    },
    swtch:{
        transform:[{scale:.8}]
    },
    titleIcon:{
        flexDirection:'row'
    },
    AvatarImg:{
        width:120,
        height:120,
        borderRadius:60,
        borderWidth:4,
        borderColor: "grey",
        marginTop:50,
        marginBottom:10,
        backgroundColor:'#F4B869'
    },
    editProfile:{
        color:"white",
        fontSize:14,
        borderWidth:1,
        borderColor:"white",
        borderRadius:10,
        padding:4,
        paddingHorizontal:10,
        marginTop:5,
        fontFamily:"Nunito-Regular",
    },
    SignOutbox:{
        width:300,
        height:30,
        backgroundColor:'rgba(179,150,106,0.9)',
        // opacity:.5,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
        marginBottom:30,
        marginTop:10,
        paddingVertical:25
    },
    editBox:{
        width:350,
        height:40,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        margin:6,
        marginTop:10,
        flexDirection:"row",
        paddingVertical:25,
        fontFamily:"Nunito-Regular",
    }

})

export default style;
