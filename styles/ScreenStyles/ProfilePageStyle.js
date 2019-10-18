import {StyleSheet} from 'react-native';
import { whileStatement } from '@babel/types';

const style = StyleSheet.create({
    options:{
        color:"white",
        fontSize:14,
        marginLeft:60,
        marginBottom:10
    },
    titles:{
        color:"white",
        fontSize:16,
        marginLeft:20,
        marginBottom:10,
        marginTop:5
    },
    container:{
        justifyContent:"center",
        height:"100%",
        backgroundColor:"#061a20"
    },
    name:{
        color:"white",
        fontSize:24
    },
    settings:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10
    },
    avatar:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 25
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
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:2,
        borderColor: "#f4e664",
        marginBottom:20
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
    }

})

export default style;