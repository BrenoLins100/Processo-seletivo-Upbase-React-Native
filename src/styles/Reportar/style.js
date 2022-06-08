import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    form:{
        padding: 30,
    },
    denuncia:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    opcaoDenuncia:{
        fontSize: 20,
        marginLeft: 10,
        color: '#424F4D'
    },
    inputs:{
        marginTop: 30
    },
    entradaTexto:{
        padding: 20,
        borderWidth: 0.5,
        borderColor: '#ccc',
        fontSize: 20,
        color: '#424F4D',
    },
    entradaTexto2:{
        marginTop: 10,
        padding: 20,
        borderWidth: 0.5,
        borderColor: '#ccc',
        fontSize: 20,
        color: '#424F4D',
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
})

export  {styles};