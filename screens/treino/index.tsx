import { StyleSheet, FlatList } from "react-native";
import { TreinoProps } from "../../routes/app.routes";
import { useCallback, useEffect, useState } from "react";
import TreinoItem from "../../components/menu/TreinoItem";

const Treino = ({ route, navigation }: TreinoProps) => {
  const [treinos, setTreinos] = useState<any>([]);

  useEffect(() => {
    setTreinos(route.params);
  }, []);

  // Ao envolver o renderItem com useCallback,
  // evitamos que a função seja recriada em cada renderização,
  // só faz sentido em listas grandes ou quando o componente é complexo.
  const renderItem = useCallback(({ item }: any) => {
    return (
      <TreinoItem
        item={item}
        onPress={() => {
          navigation.navigate("Exercicios", item.exercicios);
        }}
        resizeMode="contain"
        reverseItem={false}
      />
    );
  }, []);

  return (
    <FlatList
      data={treinos}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
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
