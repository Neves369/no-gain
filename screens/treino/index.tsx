import { View, StyleSheet, FlatList, Text } from "react-native";

const Treino = () => {
  const data = [1, 2, 1, 4, 5, 6, 7, 8, 9, 10];

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ padding: 20, borderBottomWidth: 1, borderColor: "#ccc" }}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginTop: 100 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});

export default Treino;
