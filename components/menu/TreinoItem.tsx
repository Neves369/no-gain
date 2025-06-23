import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Definição das propriedades do componente TreinoItem
interface TreinoItemProps {
  item: any;
  onPress: any;
}

// Componente TreinoItem que exibe informações de um treino
const TreinoItem = ({ item, onPress }: TreinoItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.itemSection}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TreinoItem;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  item: {
    minHeight: 100,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#b5b5b536",
    backgroundColor: "red",
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
