import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    form:{
        flex: 2,
    },
    textoProfs:{
        textAlign: 'center',
        fontSize: 14,
        padding: 11,
        color: '#5D5D5D'
    },
    soli:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#CCC',
        paddingTop: 20,
        paddingBottom: 15,
        paddingLeft: 20
    },
    textoSoli:{
        fontSize: 20,
        color: '#07342E'
    },
    dadosProfi:{
        paddingTop: 16,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
    },
    imagemProfi:{
        resizeMode: 'contain',
        width: 100,
        height: 100,
        borderRadius: 50
    },
    nome:{
        flex: 1,
        margin: 20
    },
    textoNome:{
        fontSize: 18,
        color: '#07342E'
    },
    textoValor:{
        color: '#009020',
        fontSize: 16,
    },
    textoPlantao:{
        fontSize: 14,
        color: '#424F4D',
        marginLeft: 50
    },
    textoLocal:{
        fontSize: 12,
        marginTop: 10
    },
    acoes:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -20,
        marginLeft: 60
    },
    icone:{
        margin: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    total:{
        fontSize: 12,
        color: '#5D5D5D'
    },
    btnPerfil:{
        backgroundColor: "#07689F",
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBtnPerfil:{
        color: '#FFF',
        fontSize: 16
    }
})

export  {styles};