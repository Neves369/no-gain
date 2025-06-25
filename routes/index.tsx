import { useContext } from "react";
import AppRoutes from "./app.routes"; // Rotas da aplicação principal
import AuthRoutes from "./auth.routes"; // Rotas de autenticação
import { NavigationContainer } from "@react-navigation/native";

// Define o componente Routes que gerencia
// as rotas da aplicação com base no estado de autenticação.
const Routes = () => {
  const signed = true;

  // Retorna as rotas apropriadas com base no estado de autenticação do usuário.
  // O NavigationContainer é um componente que gerencia o estado de navegação da aplicação.
  return (
    <NavigationContainer>
      {!signed ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
