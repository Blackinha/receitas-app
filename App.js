import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ReceitaScreen from "./screens/ReceitaScreen";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#6B4EFF", // Roxo mais elegante
              elevation: 5, // Sombra no Android
              shadowOpacity: 0.3, // Sombra no iOS
              shadowRadius: 5,
              shadowOffset: { width: 0, height: 2 },
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Lista de Receitas" }}
          />
          <Stack.Screen
            name="Receita"
            component={ReceitaScreen}
            options={({ route }) => ({ title: route.params.receita.nome })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
