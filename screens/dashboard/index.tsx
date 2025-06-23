import { View, ScrollView, StyleSheet } from "react-native";
import TreinoItem from "../../components/menu/TreinoItem";

const Dashboard = () => {
  const data = [
    {
      id: "1",
      nome: "Musculação",
      descricao: "Treino de força focado em membros superiores.",
      exercicios: [
        { id: "1", nome: "Supino Reto", series: 4, repeticoes: 10 },
        { id: "2", nome: "Remada Curvada", series: 4, repeticoes: 10 },
      ],
    },
    {
      id: "2",
      nome: "Pilates",
      descricao: "Treino de resistência focado em membros inferiores.",
      exercicios: [
        { id: "1", nome: "Agachamento", series: 4, repeticoes: 12 },
        { id: "2", nome: "Leg Press", series: 4, repeticoes: 12 },
      ],
    },
    {
      id: "3",
      nome: "Crossfit",
      descricao: "Treino de alta intensidade para todo o corpo.",
      exercicios: [
        { id: "1", nome: "Burpees", series: 3, repeticoes: 15 },
        { id: "2", nome: "Kettlebell Swings", series: 3, repeticoes: 15 },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.principal}></View>

      <View style={styles.menu}>
        <TreinoItem
          onPress={() => {}}
          item={data[0]}
          resizeMode="cover"
          reverseItem={false}
        />
        <TreinoItem
          onPress={() => {}}
          item={data[1]}
          resizeMode="cover"
          reverseItem={true}
        />
        <TreinoItem
          onPress={() => {}}
          item={data[2]}
          resizeMode="cover"
          reverseItem={false}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
  principal: {
    height: 400,
    width: "100%",
    backgroundColor: "blue",
  },
  menu: {
    width: "100%",
  },
  item: {
    minHeight: 100,
    flexDirection: "row",
  },
  itemReverse: {
    minHeight: 100,
    flexDirection: "row-reverse",
  },
  itemSection: {
    flex: 1,
    padding: 16,
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    gap: 5,
    flexDirection: "row",
  },
});
