import {StyleSheet} from 'react-native';
import { whileStatement } from '@babel/types';

const style = StyleSheet.create({
    options:{
        color:"dimgrey",
        fontSize:16,
        flex:1,
        marginLeft:30,
        fontWeight:'500'
    },
    titles:{
        color:"white",
        fontSize:18,
        marginLeft:10
        // marginBottom:10,
        // marginTop:5,
    },
    SignOutTitles:{
        color:"black",
        fontSize:18
    },
    container:{
        justifyContent:"center",
        height:"100%",
        backgroundColor:"#ffc04d",
        alignItems:"center",
        justifyContent:"center"
    },
    name:{
        color:"white",
        fontSize:36
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
        marginBottom: 25,
        backgroundColor:'#3f5485',
        width:400,
        height:200,
        borderBottomLeftRadius:300,
        borderBottomRightRadius:300
    },
    icons:{
        width:20,
        height:20
    },
    swtch:{
        marginRight:20,
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
        width:300,
        height:50,
        backgroundColor:'rgba(150,150,150,0.5)',
        // opacity:.5,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
        margin:10
    },
    editBox:{
        width:300,
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