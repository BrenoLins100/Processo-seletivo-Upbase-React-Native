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
        fontSize: 20,
        color: '#424F4D',
    },
    picker:{
        padding: 20,
        fontSize: 20,
        flex: 1
    },
    selecaoDia:{
        borderWidth: 0.5,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 20
    },
    textoDia:{
        color: '#424F4D',
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
        color: '#07342E'
    },
    
})

export  {styles};