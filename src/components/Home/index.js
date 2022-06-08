import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

//estilo
import { styles } from "../../styles/Home/style.js";

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

const imagem = require("../../imgs/cuidadores.png");
const imagem2 = require("../../imgs/tecnicos.png");
const imagem3 = require("../../imgs/enfermeiros.png");
const imagem4 = require("../../imgs/diabetes.png");
const imagem5 = require("../../imgs/doses.png");

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

        <Text style={[styles.textoFeed, { fontFamily: "Inter_500Medium" }]}>
          Encontre Profissionais
        </Text>

        <ScrollView>

          <View style={styles.card}>
            <ImageBackground
              source={imagem}
              style={{ width: 335, height: 211, alignSelf: "center" }}
            />
            <Text
              style={[styles.cardText, { fontFamily: "Inter_600SemiBold" }]}
            >
              Cuidadores
            </Text>
            <TouchableOpacity style={styles.cardBtn} onPress={()=>{navigation.navigate("Tec Enfermagem")}} >
              <Text
                style={[styles.textoBtn, { fontFamily: "Inter_500Medium" }]}
              >
                Ver profissionais
              </Text>
              <Feather
                style={{ marginLeft: 12 }}
                name="arrow-right"
                size={18}
                color="#424F4D"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <ImageBackground
              source={imagem2}
              style={{ width: 335, height: 211, alignSelf: "center" }}
            />
            <Text
              style={[styles.cardText, { fontFamily: "Inter_600SemiBold" }]}
            >
              Técnicos em Enfermagem
            </Text>
            <TouchableOpacity style={styles.cardBtn} onPress={()=>{navigation.navigate("Tec Enfermagem")}} >
              <Text
                style={[styles.textoBtn, { fontFamily: "Inter_500Medium" }]}
              >
                Ver profissionais
              </Text>
              <Feather
                style={{ marginLeft: 12 }}
                name="arrow-right"
                size={18}
                color="#424F4D"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <ImageBackground
              source={imagem3}
              style={{ width: 335, height: 211, alignSelf: "center" }}
            />
            <Text
              style={[styles.cardText, { fontFamily: "Inter_600SemiBold" }]}
            >
              Enfermeiros
            </Text>
            <TouchableOpacity style={styles.cardBtn} onPress={()=>{navigation.navigate("Tec Enfermagem")}}>
              <Text
                style={[styles.textoBtn, { fontFamily: "Inter_500Medium" }]}
              >
                Ver profissionais
              </Text>
              <Feather
                style={{ marginLeft: 12 }}
                name="arrow-right"
                size={18}
                color="#424F4D"
              />
            </TouchableOpacity>
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
                source={imagem4}
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
                source={imagem5}
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

        </ScrollView>
      </View>
    );
  }
};
