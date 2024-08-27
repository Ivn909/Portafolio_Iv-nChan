import { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import Actividad from "../components/Actividad";

export default function Actividades() {
  const [actividades, setActividades] = useState([
    { id: 1, descripcion: "1a. Cátedra de Ingeniería", completado: true },
    { id: 2, descripcion: "Plática de Servicio social", completado: false },
    { id: 3, descripcion: "Baja de materias AGO_DIC 2024", completado: false },
    { id: 4, descripcion: "Práctica 1 de Dinámina", completado: false },
    { id: 5, descripcion: "Tarea de integrales", completado: false },
  ]);

  const [descripcion, setDescripcion] = useState("");

  function agregaACtividad() {
    const nuevaActividad = { id: Date.now(), descripcion, completado: false };
    setActividades([...actividades, nuevaActividad]);
    setDescripcion("");
  }

  function borrarActividad(id) {
    setActividades(actividades.filter((elemento) => elemento.id !== id));
  }

  function completarActividad(id) {
    setActividades(
      actividades.map((elemento) =>
        elemento.id === id
          ? { ...elemento, completado: !elemento.completado }
          : elemento
      )
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25 }}>Agenda Universitaria</Text>
      <TextInput
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Nueva actividad"
      />
      <Button
        style={{ width: "200%" }}
        title="Agregar Actividad"
        onPress={agregaACtividad}
      />

      <Text style={{ fontSize: 20, paddingTop: 10 }}>Lista de actividades</Text>
      {actividades.map((elemento) => (
        /*<Text>
          {elemento.id}
          {elemento.descripcion}
        </Text>*/
        <Actividad
          key={elemento.id}
          actividad={elemento}
          borrarActividad={borrarActividad}
          completarActividad={completarActividad}
        />
      ))}
    </View>
  );
}
