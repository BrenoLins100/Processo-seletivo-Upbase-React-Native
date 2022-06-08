import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

//Checkbox expo
import CheckBox from "expo-checkbox";

import AppLoading from "expo-app-loading";

//estilo
import { styles } from "../../styles/Reportar/style.js";

//menu tab



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

            <View style={styles.denuncia}>
                <CheckBox
                   
                />

                <Text style={  [styles.opcaoDenuncia,{fontFamily: "Inter_400Regular" }]} >
                    O profissional não compareceu.
                </Text>

            </View>

            <View style={styles.denuncia}>
                <CheckBox
                   
                />

                <Text style={  [styles.opcaoDenuncia,{fontFamily: "Inter_400Regular" }]} >
                    O profissional não prestou um bom serviço.
                </Text>

            </View>

            <View style={styles.denuncia}>
                <CheckBox
                   
                />

                <Text style={  [styles.opcaoDenuncia,{fontFamily: "Inter_400Regular" }]} >
                    Outro.
                </Text>

            </View>

          <View>
            <View style={styles.inputs}>
              <TextInput
              placeholderTextColor={'#424F4D'}
                style={[
                  styles.entradaTexto,
                  { fontFamily: "Inter_400Regular" },
                ]}
                placeholder="Título"
              ></TextInput>
            </View>
            <View style={styles.inputs2}>
              <TextInput 
              multiline = {true}
              numberOfLines = {10}
              textAlignVertical={'top'}
              placeholderTextColor={'#424F4D'}
                style={[
                  styles.entradaTexto2,
                  { fontFamily: "Inter_400Regular" },
                ]}
                placeholder="Especifique aqui o que houve."
              ></TextInput>
            </View>
          </View>

          <TouchableOpacity
            style={styles.btnForm}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.textoBtn, { fontFamily: "Inter_500Medium" }]}>
              Reportar
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
};
