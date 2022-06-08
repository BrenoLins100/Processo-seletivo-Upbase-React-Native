import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";

//estilo
import { styles } from "../../styles/Perfil/style.js";

//icones
import { Feather } from "@expo/vector-icons";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

const imagem = require("../../imgs/profi.png");
const imagem2 = require("../../imgs/diabetes.png");
const imagem3 = require("../../imgs/doses.png");


console.disableYellowBox = true;

export default ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.pesquisa}>
            <Feather
              style={styles.iconePesquisa}
              name="search"
              size={14}
              color="#424F4D"
            />
            <TextInput
              style={[styles.barraBusca, { fontFamily: "Inter_400Regular" }]}
              placeholderTextColor="#424F4D"
              placeholder="Buscar capacitações, profissionais..."
            ></TextInput>
          </View>
        </View>

        <View style={styles.aviso} >

            
            <View style={{flex:1}} >
                <Feather name="alert-triangle" size={30} color="#8b6421" onPress={() => navigation.navigate("Perfil")} />
            </View>
           
                
            <View style={{flex:5}} >
            <Text style={[styles.textoAviso,{ fontFamily: "Inter_500Medium", color: "#8b6421"}]}>Completar Perfil:Preencha suas informações para encontrar pacientes</Text>
            </View>
            
        
        
        </View>

        <Text style={[styles.textoFeed, { fontFamily: "Inter_500Medium" }]}>
          Seu perfil
        </Text>

        <View style={styles.dadosProfi}>
              <Image style={styles.imagemProfi} source={imagem} />

              <View style={styles.nome}>
                <Text
                  style={[
                    styles.textoNome,
                    { fontFamily: "Inter_600SemiBold" },
                  ]}
                >
                  Carolina Magalhães
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      styles.textoLocal,
                      { fontFamily: "Inter_300Light" },
                    ]}
                  >
                    São Paulo - SP
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.acoes}>
              <View style={styles.icone}>
                <Feather name="star" size={18} color="#d3d3d3" />
                <Feather name="star" size={18} color="#d3d3d3" />
                <Feather name="star" size={18} color="#d3d3d3" />
                <Feather name="star" size={18} color="#d3d3d3" />
                <Feather name="star" size={18} color="#d3d3d3" />
                <Text style={[styles.total, { fontFamily: "Inter_300Light" }]}>
                  (0)
                </Text>
              </View>
            </View>

            <View style={styles.completarPerfil} >
                <Text style={[styles.textoFeed, { fontFamily: "Inter_500Medium", color: "#07689F" }]}>
                    Completar Perfil
                </Text>
                <Feather  style={{marginLeft: 15}} name="arrow-right" size={25} color="#07689F" />
            </View>

          <View style={styles.capac} >
            <Text style={[styles.textoFeed, { fontFamily: "Inter_500Medium" }]}>
                Capacitações Profissionais
            </Text>
            <Text style={[styles.textoFeed, { fontFamily: "Inter_500Medium", color: "#07689F" }]}>
                Ver mais
            </Text>
          </View>

          <ScrollView horizontal={true}>

            <View style={styles.card2}>

                <ImageBackground
                source={imagem2}
                style={{ width: 180, height: 130, alignSelf: "center" }}
                />
                <Text
                style={[styles.cardText2, { fontFamily: "Inter_600SemiBold" }]}
                >
                Diabetes: alimentos {'\n'} para evitar.
                </Text>
                <TouchableOpacity style={styles.cardBtn2}>
                <Text
                    style={[styles.textoBtn2, { fontFamily: "Inter_500Medium" }]}
                >
                    Parceiros
                </Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.card2, {marginLeft: 5} ]}>

                <ImageBackground
                source={imagem3}
                style={{ width: 180, height: 130, alignSelf: "center" }}
                />
                <Text
                style={[styles.cardText2, { fontFamily: "Inter_600SemiBold" }]}
                >
                Como ministrar {'\n'} doses.
                </Text>
                <TouchableOpacity style={[styles.cardBtn2, {backgroundColor: "#3B2D72", width: 119}, ]}>
                <Text
                    style={[styles.textoBtn2, { fontFamily: "Inter_500Medium" }]}
                >
                    Capacitações
                </Text>
                </TouchableOpacity>
            </View>

          </ScrollView>

      </View>
    );
  }
};
