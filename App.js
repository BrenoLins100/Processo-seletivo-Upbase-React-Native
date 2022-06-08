import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//telas

import Home from "./src/components/Home/index.js"

import Login from "./src/components/Login/index.js";

import Contratar from "./src/components/Contratar/index.js";

import Pagamentos from "./src/components/Pagamentos/index.js";

import Plantoes from "./src/components/Plantoes/index.js";

import TecEnfermagem from "./src/components/TecEnfermagem/index.js";

import Reportar from "./src/components/Reportar/index.js";

import Perfil from "./src/components/Perfil/index.js"




const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>

      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

      <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

      <Stack.Screen
          name="Tec Enfermagem"
          component={TecEnfermagem}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#006557",
            },
            headerTintColor: "#fff",
          }}
        />

  
        <Stack.Screen
          name="Contratar"
          component={Contratar}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#006557",
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="Plantoes"
          component={Plantoes}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#006557",
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="Pagamentos"
          component={Pagamentos}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#006557",
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="Reportar"
          component={Reportar}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#006557",
            },
            headerTintColor: "#fff",
          }}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#006557",
            },
            headerTintColor: "#fff",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
