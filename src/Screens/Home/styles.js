import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginTop:30,
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
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 70,
        marginTop: 100,
    },
    cont:{
        height:"100%",
        position: "absolute",
        left: 0,
        right:0,
        bottom:0,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#000"
    },
    text:{
        justifyContent: "center",
        alignItems:"center",
        fontSize: 20,
        width:"85%",
        margin: 10
    }
})

export default styles