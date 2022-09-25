import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        alignItems: "center",
        justifyContent:"center",
    },
    textButton:{
        fontSize:20,
        color:"#fff"
    },
    button:{
        backgroundColor: "#ff0043",
        borderRadius:50,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 70,
        marginTop: 50
    },
    formLabel:{
        color:"#000",
        fontSize:18,
        paddingLeft:20,
    },
    formInput:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10,
    },
})

export default styles