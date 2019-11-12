import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    barPosition:{
        flex:1,
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:'#0A191F',
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
        padding:5
    },
    ImgSize:{
        // width:50,
        // height:50,
        marginBottom:3
    },
    MenuText:{
        fontSize:10,
        color:"#74726C"
    }
})

export default style;