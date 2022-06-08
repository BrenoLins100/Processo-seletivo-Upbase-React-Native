import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

//estilo
import {styles} from '../../styles/login/style.js'

//icones
import { Feather } from "@expo/vector-icons";

import AppLoading from 'expo-app-loading';
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
} from '@expo-google-fonts/inter';

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
      } else{
        return(
            <View style={styles.container} >  
                <View style={styles.logo}>
                    
                    <View style={styles.estrelas} >
                      <Feather name="star" size={35} color="#FFF" />
                      <Feather  style={{marginTop: -30}} name="star" size={40} color="#FFF" />
                      <Feather name="star" size={35} color="#FFF" />
                    </View>
                    
                    <Text style={[styles.esther,{fontFamily: "Inter_700Bold"}]} >Esther</Text>
                    <Text style={[styles.homeCare, {fontFamily: "Inter_400Regular"}  ]} >Home Care</Text>
                </View>
                <View style={styles.form}>
    
                    <View>
                        <Text style={[styles.textoSelecione,{fontFamily:"Inter_400Regular"}]} >Selecione seu perfil abaixo para acessar sua conta:</Text>
                    </View>
    
                    <TouchableOpacity style={styles.btnForm} onPress={()=> navigation.navigate("Home")} >
                        <Text style={[styles.textoBtn, {fontFamily:"Inter_500Medium"} ]} >Responsável</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.btnForm2} onPress={()=> navigation.navigate("Perfil")} >
                    <Text style={[styles.textoBtn2, {fontFamily:"Inter_500Medium"}]}>Profissional</Text>
                    </TouchableOpacity>
    
                </View>
            </View>
        )
       
      }

}