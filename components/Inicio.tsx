import React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";

interface InicioProps {
  navigation: any;
}

const Inicio: React.FC<InicioProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos</Text>
      <Button
        title="Ver actividades"
        onPress={() => navigation.navigate("Actividades")}
      />
      <Button
        title="Ver pantalla3"
        onPress={() => navigation.navigate("Pantalla3")}
      />
      <Image
        source={require("../assets/bienvenido.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
  },
});

export default Inicio;
