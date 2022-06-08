import React from 'react';
import {View, Text} from 'react-native'

import { Feather } from "@expo/vector-icons";

import { styles } from "../../styles/Menu/style.js";

export default function MenuTab ({navigation}){

    return(
        <View style={styles.tabMenu}>
        <View style={styles.iconeMenu}>
          <Feather name="home" size={25} color="#00816F" onPress={() => navigation.navigate("Home")}  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} />
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              color: "#00816F",
              fontSize: 12,
            }}
          >
            Home
          </Text>
        </View>

        <View style={styles.iconeMenu}>
          <Feather name="clipboard" size={25} color="#00816F" onPress={() => navigation.navigate("Plantoes")}  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}  />
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              color: "#00816F",
              fontSize: 12,
            }}
          >
            Plantões
          </Text>
        </View>
        <View style={styles.iconeMenu}>
          <Feather name="heart" size={25} color="#00816F" />
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              color: "#00816F",
              fontSize: 12,
            }}
          >
            Favoritos
          </Text>
        </View>
        <View style={styles.iconeMenu}>
          <Feather name="user" size={25} color="#00816F" onPress={() => navigation.navigate("Perfil")}  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} />
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              color: "#00816F",
              fontSize: 12,
            }}
          >
            Minha conta
          </Text>
        </View>
      </View>
    )

}