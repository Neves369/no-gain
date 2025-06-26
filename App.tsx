import Routes from "./routes";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./context/auth";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar translucent />
      {/* O componente Routes é responsável por definir as diferentes telas 
            ou páginas da aplicação e como navegar entre elas. */}
      <Routes />
    </AuthProvider>
  );
}
