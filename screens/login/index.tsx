import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { AxiosResponse } from "axios";
import IUsuario from "../../models/IUsuario";
import { useAuth } from "../../context/auth";
import background from "../../assets/background.webp";
import { Controller, useForm } from "react-hook-form";
import UsuarioService from "../../service/UsuarioService";

// tipos dos dados do formulário de login
interface FormData {
  email: string;
  senha: string;
}

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const logar = (data: FormData) => {
    setLoading(true);

    UsuarioService.login(data)
      .then((resp: AxiosResponse<IUsuario[]>) => {
        if (resp.status == 200) {
          signIn(resp.data[0]);
        } else {
          console.log("Usuário não encontrado");
        }
      })
      .catch((error) => {
        console.error("Erro ao realizar login:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={background}>
        <View style={styles.signInContainer}>
          <Text style={styles.label}>SIGN IN</Text>
        </View>

        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              maxLength={60}
              placeholderTextColor={"white"}
              style={styles.input}
              placeholder="Email"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email && (
          <Text style={{ color: "red" }}>Email é obrigatório</Text>
        )}

        <Controller
          control={control}
          name="senha"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              autoCapitalize="none"
              maxLength={12}
              placeholderTextColor={"white"}
              style={styles.input}
              secureTextEntry={true}
              placeholder="Senha"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.senha && (
          <Text style={{ color: "red" }}>Senha é obrigatória</Text>
        )}

        <TouchableOpacity
          disabled={loading}
          onPress={handleSubmit(logar)}
          style={styles.button}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.textButton}>ENTRAR</Text>
          )}
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingView>
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
