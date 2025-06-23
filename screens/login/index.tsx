import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import background from "../../assets/background.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [loading, setLoading] = useState(false);

  const logar = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={background}>
        <View style={styles.signInContainer}>
          <Text style={styles.label}>SIGN IN</Text>
        </View>

        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          maxLength={60}
          placeholderTextColor={"white"}
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <TextInput
          autoCapitalize="none"
          maxLength={12}
          placeholderTextColor={"white"}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={(value) => setPassowrd(value)}
        />

        <TouchableOpacity
          disabled={loading}
          onPress={logar}
          style={styles.button}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.textButton}>ENTRAR</Text>
          )}
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Login;

// Definição dos estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    gap: 30,
    paddingBottom: 50,
    paddingVertical: 20,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10, // Espaçamento interno
    color: "#fbfbfb",
    backgroundColor: "#e7e7e746",
  },
  button: {
    padding: 20, // Espaçamento interno do botão
    width: "100%",
    backgroundColor: "#e7e7e7",
    alignItems: "center",
    borderRadius: 5, // Bordas arredondadas do botão
  },
  textButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    flex: 1,
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
  },
});
