import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    form:{
        flex: 2,
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
        padding: 25,
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
        fontSize: 20,
        color: '#07342E'
    },
    textoLigar:{
        color: '#00816F',
        fontSize: 15.5,
        marginLeft: 5,
    },
    acoes:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#CCC',
    },
    icone:{
        margin: 20,
        alignItems: 'center',
    },
    /* Menu tab */
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