import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AppLoading from "expo-app-loading";

//estilo
import { styles } from "../../styles/Contratar/style.js";

//menu tab
import MenuTab from "../MenuTab/index.js";

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
        <View style={styles.form}>
          <View>
            <Text
              style={[
                styles.textoSelecione,
                { fontFamily: "Inter_400Regular" },
              ]}
            >
              Selecione o dia e horário para o plantão:
            </Text>

            <View style={styles.inputs}>
              <TextInput
              placeholderTextColor={'#424F4D'}
                style={[
                  styles.entradaTexto,
                  { fontFamily: "Inter_400Regular" },
                ]}
                placeholder="Nome do paciente"
              ></TextInput>

              <View style={styles.selecaoDia}>
                <Text
                  style={[styles.textoDia, { fontFamily: "Inter_400Regular" }]}
                >
                  Dia
                </Text>

                <Picker
                  style={[styles.picker, { fontFamily: "Inter_400Regular" }]}
                >
                  <Picker.Item value="dia" />
                </Picker>
              </View>

              <View style={styles.selecaoDia}>
                <Text
                  style={[styles.textoDia, { fontFamily: "Inter_400Regular" }]}
                >
                  Horário
                </Text>

                <Picker
                  style={[styles.picker, { fontFamily: "Inter_400Regular" }]}
                >
                  <Picker.Item value="dia" />
                </Picker>
              </View>

              
            </View>
          </View>

          <TouchableOpacity
            style={styles.btnForm}
            onPress={() => navigation.navigate("Pagamentos")}
          >
            <Text style={[styles.textoBtn, { fontFamily: "Inter_500Medium" }]}>
              Continuar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnForm2}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={[styles.textoBtn2, { fontFamily: "Inter_500Medium" }]}>
              Voltar
            </Text>
          </TouchableOpacity>
        </View>

        <MenuTab navigation={navigation} />

      </View>
    );
  }
};
