import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Login from "../screens/login";
import Dashboard from "../screens/dashboard";

// Define o tipo StackNavigation que representa a estrutura das rotas na navegação de stack.
// Esse tipo descreve uma rota (Dashboard)
// e os parâmetros que ela aceita:
// Dashboard: Não aceita parâmetros (undefined).
type StackNavigation = {
  Dashboard: undefined;
};

// Exportando 3 tipos que serão usados para tipar as props nas telas e na navegação:
// StackTypes: Usado para tipar a propriedade navigation em componentes que utilizam a navegação stack.
// DashboardProps: Usado para tipar as props do componente Dashboard. Inclui informações sobre a navegação e os parâmetros da rota Dashboard.
export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type DashboardProps = NativeStackScreenProps<
  StackNavigation,
  "Dashboard"
>;

// Criação do stack navigator do tipo StackNavigation,
// garantindo que navegação siga a estrutura de rotas e parâmetros definidos no mesmo.
const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

// O StackComponent é um componente funcional que define a estrutura de navegação.
// Dentro dele, você configura as telas (Screen) que compõem a navegação stack
const AppRoutes = () => {
  return (
    <Navigator initialRouteName="Dashboard">
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          animation: "slide_from_right",
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
