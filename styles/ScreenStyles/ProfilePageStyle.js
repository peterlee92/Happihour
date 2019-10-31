import {StyleSheet} from 'react-native';
import { whileStatement } from '@babel/types';

const style = StyleSheet.create({
    options:{
        color:"dimgrey",
        fontSize:16,
        flex:1,
        marginLeft:15,
        fontWeight:'bold',
        letterSpacing:1
    },
    titles:{
        color:"white",
        fontSize:16,
        letterSpacing:2,
        marginLeft:10
        // marginBottom:10,
        // marginTop:5,
    },
    SignOutTitles:{
        color:"black",
        fontSize:21,
        fontWeight:'700',
        letterSpacing:3
    },
    container:{
        justifyContent:"center",
        height:"100%",
        width:'100%',
        // backgroundColor:"#E4A664",
        alignItems:"center"
    },
    name:{
        color:"white",
        fontSize:40,
        letterSpacing:5,
        marginTop:-15
        // fontWeight:'200'
    },
    atName:{
        color:'#F4B869',
        fontSize:18
    },
    settings:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        margin:10
    },
    avatar:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 10,
        marginTop:-50,
        backgroundColor:'#3f5485',
        width:500,
        height:300,
        borderWidth:10,
        borderColor:'#404332',
        borderBottomLeftRadius:300,
        borderBottomRightRadius:300
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
        marginBottom:10
    },
    editProfile:{
        color:"white",
        fontSize:14,
        borderWidth:1,
        borderColor:"white",
        borderRadius:10,
        padding:4,
        paddingHorizontal:10,
        marginTop:10
    },
    SignOutbox:{
        width:350,
        height:50,
        backgroundColor:'rgba(179,150,106,0.9)',
        // opacity:.5,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
        margin:10
    },
    editBox:{
        width:350,
        height:50,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        margin:10,
        flexDirection:"row"
    }

})

export default style;