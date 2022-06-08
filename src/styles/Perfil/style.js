import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        backgroundColor: "#006557",
        height: 130,
        alignItems: "center",
        justifyContent: "center"
    },
    pesquisa:{
        marginTop: 30,
        padding: 28,
        flexDirection: 'row',
        alignItems: "center",
        position: 'relative'
    },
    iconePesquisa:{
        position: 'absolute',
        left: 35,
        zIndex: 9999
    },
    barraBusca:{
        backgroundColor: "#FFF",
        width: 300,
        height: 40,
        paddingLeft: 30,
        borderRadius: 10,
        fontSize: 14
    },
    aviso:{
        padding: 12,
        margin: 30,
        backgroundColor: '#f8f4c4',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d6bb8e',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    textoAviso:{
        fontSize: 14,
    },
    textoFeed:{
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 35,
        color: '#424F4D',
        fontSize: 16
    },
    card:{
        position: 'relative',
        marginBottom: 15,
    },
    card2:{
        position: 'relative',
        marginLeft: 30,
        marginRight: 15,
        marginBottom: 113
    },
    cardText:{
        color: '#FFF',
        fontSize: 20,
        position: 'absolute',
        left: 41,
        bottom: 67
    },
    cardText2:{
        color: '#FFF',
        fontSize: 14,
        position: 'absolute',
        left: 12,
        bottom: 9
    },
    cardBtn2:{
        position: 'absolute',
        top: 9,
        left: 12,
        backgroundColor: '#D48A04',
        width: 89,
        height: 22,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textoBtn:{
        color: '#07342E'
    },
    textoBtn2:{
        color: '#FFF',
        fontSize: 14
    },
    capac:{
        flexDirection: 'row',
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
    textoLocal:{
        color: '#424F4D',
        fontSize: 16,
    },
    acoes:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -30,
        marginLeft: 25,
        marginRight: 25,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    },
    icone:{
        margin: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    total:{
        fontSize: 14,
        color: '#5D5D5D'
    },
    completarPerfil:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export  {styles};