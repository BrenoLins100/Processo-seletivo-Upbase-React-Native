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
    cardBtn:{
        position: 'absolute',
        left: 41,
        bottom: 13,
        backgroundColor: '#FFF',
        width: 213,
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
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
    }
})

export  {styles};