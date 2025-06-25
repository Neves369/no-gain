import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { TreinoProps } from "../../routes/app.routes";
import TreinoItem from "../../components/menu/TreinoItem";

const Treino = ({ route, navigation }: TreinoProps) => {
  const [treinos, setTreinos] = useState<any>([]);

  useEffect(() => {
    setTreinos(route.params);
  }, []);

  return (
    <FlatList
      data={treinos}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => {
        return (
          <TreinoItem
            item={item}
            onPress={() => {
              // navigation.navigate("Exercicios", item.exercicios);
            }}
            resizeMode="contain"
            reverseItem={false}
          />
        );
      }}
      keyExtractor={(item) => `${item.nome}`}
    />
  );
};

export default Treino;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});
