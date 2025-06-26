import React from "react";
import imageMap from "../../utils/imageMap";
import Entypo from "@expo/vector-icons/Entypo";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// Definição das propriedades do componente TreinoItem
interface TreinoItemProps {
  item: any;
  onPress: () => void;
  reverseItem: boolean;
  resizeMode: "cover" | "contain" | "stretch" | "repeat" | "center";
}

// Componente TreinoItem que exibe informações de um treino
const TreinoItem = ({
  item,
  onPress,
  reverseItem,
  resizeMode,
}: TreinoItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={reverseItem ? styles.reverseItem : styles.item}
    >
      <ImageBackground
        resizeMode={resizeMode}
        style={styles.itemSection}
        source={imageMap[item.nome] || null}
      />

      <View style={styles.itemSection}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        {item.exercicios?.length > 0 && (
          <View style={styles.info}>
            <Entypo name="list" size={24} color={"grey"} />
            <Text>{item.exercicios.length} Exercícios</Text>
          </View>
        )}
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
  },
  reverseItem: {
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
