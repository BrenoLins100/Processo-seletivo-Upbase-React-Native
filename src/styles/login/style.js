import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    logo:{
        flex: 1.5,
        backgroundColor: "#00816F",
        justifyContent: "center",
        alignItems: "center"
    },
    estrelas:{
        flexDirection: 'row',
    },
    esther:{
        color: "#fff",
        fontSize: 45,
    },
    homeCare:{
        color: "#fff",
        marginTop: -3,
        fontSize: 20,
    },
    form:{
        flex: 2,
        padding: 30,
    },
    btnForm:{
        backgroundColor: '#07689F',
        padding: 15,
        marginTop: 30,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#07689F'
    },
    btnForm2:{
        backgroundColor: '#FFF',
        padding: 15,
        marginTop: 30,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#07689F'
    },
    textoBtn:{
        color: '#fff',
        fontSize: 20
    },
    textoBtn2:{
        color: '#07689F',
        fontSize: 20
    },
    textoSelecione:{
        fontSize: 20,
        color: '#07342E'
    }
})

export  {styles};