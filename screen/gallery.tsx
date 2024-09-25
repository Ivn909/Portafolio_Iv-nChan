import React from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";

const Gallery: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Lista de imágenes</Text>
      <Image
        source="https://via.placeholder.com/600/92c952" // Cambia esta ruta por la tuya
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/img2.jpg")} // Cambia esta ruta por la tuya
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/img3.jpg")} // Cambia esta ruta por la tuya
        style={styles.image}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 600,
    height: 600,
    marginBottom: 20,
  },
});

export default Gallery;
