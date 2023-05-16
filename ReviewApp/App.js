import { StyleSheet, Text, View } from "react-native";
import createNativeStackNavigator from "@react-navigation/native-stack";
import NavigationContainer from "@react-navigation/native";
import Home from "./screens/Home";

export default function App() {
  const Stack = createNativeStackNavigator(); // it's return an object contains Navigator & scree
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen name="Home" component={Home} />
        <Stack.screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
