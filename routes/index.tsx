import { useContext } from "react";
import AppRoutes from "./app.routes"; // Rotas da aplicação principal
import AuthRoutes from "./auth.routes"; // Rotas de autenticação

// Define o componente Routes que gerencia
// as rotas da aplicação com base no estado de autenticação.
const Routes = () => {
  const signed = true;

  // Retorna as rotas apropriadas com base no estado de autenticação do usuário.
  return <>{!signed ? <AuthRoutes /> : <AppRoutes />}</>;
};

export default Routes;
