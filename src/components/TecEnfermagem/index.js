import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import AppLoading from "expo-app-loading";

//estilo
import { styles } from "../../styles/TecEnfermagem/style.js";

//menu tab
import MenuTab from "../MenuTab/index.js";

import { Feather } from "@expo/vector-icons";

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

const imagem = require("../../imgs/profi.png");
const imagem2 = require("../../imgs/profi2.jpg");
const imagem3 = require("../../imgs/profi3.jpg");
const imagem4 = require("../../imgs/profi4.png");

export default ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.form}>
            <Text
              style={[styles.textoProfs, { fontFamily: "Inter_400Regular" }]}
            >
              14 profissionais
            </Text>

            <View style={styles.dadosProfi}>

              <Image style={styles.imagemProfi} source={imagem2} />

              <View style={styles.nome}>
                <Text
                  style={[
                    styles.textoNome,
                    { fontFamily: "Inter_600SemiBold" },
                  ]}
                >
                  Richard Ramos
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
                      styles.textoValor,
                      { fontFamily: "Inter_600SemiBold" },
                    ]}
                  >
                    R$70,00
                  </Text>
                  <Text
                    style={[
                      styles.textoPlantao,
                      { fontFamily: "Inter_600SemiBold" },
                    ]}
                  >
                    Plantão
                  </Text>
                </View>
                <Text
                  style={[styles.textoLocal, { fontFamily: "Inter_300Light" }]}
                >
                  Coren: 00/00000 São Paulo - SP
                </Text>
              </View>
            </View>

            <View style={styles.acoes}>
              <View style={styles.icone}>
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Text style={[styles.total, { fontFamily: "Inter_300Light" }]}>
                  (8)
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.btnPerfil} onPress={()=>{navigation.navigate("Plantoes")}}>
              <Text
                style={[
                  styles.textoBtnPerfil,
                  { fontFamily: "Inter_600SemiBold" },
                ]}
              >
                Ver perfil
              </Text>
            </TouchableOpacity>

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
                      styles.textoValor,
                      { fontFamily: "Inter_600SemiBold" },
                    ]}
                  >
                    R$80,00
                  </Text>
                  <Text
                    style={[
                      styles.textoPlantao,
                      { fontFamily: "Inter_600SemiBold" },
                    ]}
                  >
                    Plantão
                  </Text>
                </View>
                <Text
                  style={[styles.textoLocal, { fontFamily: "Inter_300Light" }]}
                >
                  São Paulo - SP
                </Text>
              </View>
            </View>

            <View style={styles.acoes}>
              <View style={styles.icone}>
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Text style={[styles.total, { fontFamily: "Inter_300Light" }]}>
                  (8)
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.btnPerfil} onPress={()=>{navigation.navigate("Plantoes")}} >
              <Text
                style={[
                  styles.textoBtnPerfil,
                  { fontFamily: "Inter_600SemiBold" },
                ]}
              >
                Ver perfil
              </Text>
            </TouchableOpacity>

            <View style={styles.dadosProfi}>
              <Image style={styles.imagemProfi} source={imagem3} />

              <View style={styles.nome}>
                <Text
                  style={[
                    styles.textoNome,
                    { fontFamily: "Inter_600SemiBold" },
                  ]}
                >
                  Odete Rocha
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
                      styles.textoValor,
                      { fontFamily: "Inter_600SemiBold" },
                    ]}
                  >
                    R$70,00
                  </Text>
                  <Text
                    style={[
                      styles.textoPlantao,
                      { fontFamily: "Inter_600SemiBold" },
                    ]}
                  >
                    Plantão
                  </Text>
                </View>
                <Text
                  style={[styles.textoLocal, { fontFamily: "Inter_300Light" }]}
                >
                   Coren: 00/00000 São Paulo - SP
                </Text>
              </View>
            </View>

            <View style={styles.acoes}>
              <View style={styles.icone}>
              <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Text style={[styles.total, { fontFamily: "Inter_300Light" }]}>
                  (8)
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.btnPerfil} onPress={()=>{navigation.navigate("Plantoes")}}>
              <Text
                style={[
                  styles.textoBtnPerfil,
                  { fontFamily: "Inter_600SemiBold" },
                ]}
              >
                Ver perfil
              </Text>
            </TouchableOpacity>

            <View style={styles.dadosProfi}>
              <Image style={styles.imagemProfi} source={imagem4} />

              <View style={styles.nome}>
                <Text
                  style={[
                    styles.textoNome,
                    { fontFamily: "Inter_600SemiBold" },
                  ]}
                >
                  Camila Couto
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
                      styles.textoValor,
                      { fontFamily: "Inter_600SemiBold" },
                    ]}
                  >
                    R$90,00
                  </Text>
                  <Text
                    style={[
                      styles.textoPlantao,
                      { fontFamily: "Inter_600SemiBold" },
                    ]}
                  >
                    Plantão
                  </Text>
                </View>
                <Text
                  style={[styles.textoLocal, { fontFamily: "Inter_300Light" }]}
                >
                   Coren: 00/00000 São Paulo - SP
                </Text>
              </View>
            </View>

            <View style={styles.acoes}>
              <View style={styles.icone}>
              <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Feather name="star" size={12} color="#FFBA3E" />
                <Text style={[styles.total, { fontFamily: "Inter_300Light" }]}>
                  (8)
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.btnPerfil} onPress={()=>{navigation.navigate("Plantoes")}}>
              <Text
                style={[
                  styles.textoBtnPerfil,
                  { fontFamily: "Inter_600SemiBold" },
                ]}
              >
                Ver perfil
              </Text>
            </TouchableOpacity>
            

          </View>
        </ScrollView>
      </View>
    );
  }
};
