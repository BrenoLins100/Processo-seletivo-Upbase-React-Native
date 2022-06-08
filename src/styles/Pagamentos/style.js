import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    form:{
        flex: 2,
        padding: 30,
    },
    inputs:{
        marginTop: 30
    },
    entradaTexto:{
        padding: 20,
        borderWidth: 0.5,
        borderColor: '#ccc',
        fontSize: 20
    },
    picker:{
        padding: 20,
        borderWidth: 0.5,
        borderColor: '#ccc',
        fontSize: 20
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
        color:'#424F4D'
    },
    tabMenu:{
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    iconeMenu:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
})

export  {styles};