import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginView:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:'center'

    },
    input:{
        width:"80%",
        padding:5,
        marginTop:10,
        backgroundColor:"#fff",
        borderWidth: 1,
        borderColor:"#f15454",
        borderRadius: 5
    },
    btnContainer:{
        flexDirection: "row",
        width: 150,
        padding: 7,
        backgroundColor:"#f15454",
        borderRadius:5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    btnText:{
        fontSize: 16,
        color: "#fff",
        alignSelf:"center",
    }

})

export default styles;