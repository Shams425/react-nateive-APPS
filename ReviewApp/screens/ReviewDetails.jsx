import { Button, Text, View } from "react-native";

export default function ReviewDetails({ navigation }) {
  return (
    <View>
      <Button
        title="Back To Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
