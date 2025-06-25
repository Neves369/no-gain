import data from "../../utils/data.json";
import { DashboardProps } from "../../routes/app.routes";
import TreinoItem from "../../components/menu/TreinoItem";
import { View, StyleSheet, FlatList } from "react-native";
import Carrossel from "../../components/dashboard/carrossel";

const Dashboard = ({ navigation }: DashboardProps) => {
  // Função para renderizar cada item da lista de categorias
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TreinoItem
        onPress={() => {
          buscarExercios(item.nome);
        }}
        item={item}
        resizeMode="cover"
        reverseItem={index % 2 === 0}
      />
    );
  };

  // Função para buscar os exercícios de uma categoria e navegar para a tela de treino
  // passando os exercícios como parâmetro
  const buscarExercios = (nome: string) => {
    const categoria = data.categorias.find(
      (atividade) => atividade.nome === nome
    );
    const exercicios = categoria ? categoria.exercicios : [];
    navigation.navigate("Treino", exercicios);
  };

  // Componente de cabeçalho da lista
  // Não se deve usar FlatList dentro de ScrollView
  const ListHeaderComponent = () => {
    return (
      <View style={styles.principal}>
        <Carrossel />
      </View>
    );
  };

  return (
    <FlatList
      data={data.categorias}
      ListHeaderComponent={ListHeaderComponent}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 50 }}
      renderItem={renderItem}
    />
  );
};

export default Dashboard;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  principal: {
    height: 400,
    width: "100%",
  },
});
