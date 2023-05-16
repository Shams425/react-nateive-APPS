import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import createNativeStackNavigator from "@react-navigation/native-stack";
import nativeContainer from "@react-navigation/native";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
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
