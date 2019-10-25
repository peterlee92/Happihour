import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    barPosition:{
        flex:1,
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection:"row",
        position:"absolute",
        bottom: 0,
        left:0,
        right:0,
        backgroundColor:'#061a20',
        paddingBottom:10,
        paddingTop:10,
        paddingHorizontal:10,
        paddingHorizontal:30
    },
    ItemPosition:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    },
    ImgSize:{
        // width:50,
        // height:50,
        marginBottom:10
    },
    MenuText:{
        fontSize:14,
        color:"dimgrey"
    }
})

export default style;