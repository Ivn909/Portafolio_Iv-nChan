import { StyleSheet, Text, View } from "react-native";
import Actividades from "./components/Actividades";
import { NavigationContainer } from "@react-navigation/native";
import Inicio from "./components/Inicio";
import { createStackNavigator } from "@react-navigation/stack";
import Pantalla3 from "./components/Pantalla3";

const navegador = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <navegador.Navigator>
        <navegador.Screen name="Inicio" component={Inicio} />
        <navegador.Screen name="Actividades" component={Actividades} />
        <navegador.Screen name="Pantalla3" component={Pantalla3} />
      </navegador.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
