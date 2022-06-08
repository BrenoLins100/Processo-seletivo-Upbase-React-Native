import React from "react";
import { View, Text, Image } from "react-native";

import AppLoading from "expo-app-loading";

//estilo
import { styles } from "../../styles/Plantoes/style.js";

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

export default ({ navigation}) => {
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
        <View style={styles.form}>
          <View style={styles.soli}>
            <Feather name="check" size={25} color="#00816F" onPress={() => navigation.navigate("Contratar")} />
            <Text style={[styles.textoSoli, { fontFamily: "Inter_300Light" }]}>
              Solicitação
            </Text>
            <Text
              style={[
                styles.textoSoli,
                { fontFamily: "Inter_500Medium", marginLeft: 5 },
              ]}
            >
              aceita
            </Text>
          </View>

          <View style={styles.dadosProfi}>
            <Image style={styles.imagemProfi} source={imagem} />

            <View style={styles.nome}>
              <Text
                style={[styles.textoNome, { fontFamily: "Inter_600SemiBold" }]}
              >
                Carolina Magalhães
              </Text>

              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Feather name="phone" size={19} color="#00816F" />
                <Text
                  style={[
                    styles.textoLigar,
                    { fontFamily: "Inter_600SemiBold" },
                  ]}
                >
                  Ligar para o profissional
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.acoes}>
            <View style={styles.icone}>
              <Feather name="alert-triangle" size={30} color="red" onPress={()=>{navigation.navigate("Reportar")}} />
              <Text style={{ fontFamily: "Inter_600SemiBold", color: "red" }}>
                Reportar
              </Text>
            </View>

            <View style={styles.icone}>
              <Feather name="star" size={30} color="#07689F" />
              <Text
                style={{ fontFamily: "Inter_600SemiBold", color: "#07689F" }}
              >
                Avaliar
              </Text>
            </View>
          </View>
        </View>
        <MenuTab navigation={navigation} />
      </View>
    );
  }
};
