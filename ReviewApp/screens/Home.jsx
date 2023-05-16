import { useState } from "react";
import { Text, View } from "react-native";
import { defaultReviews } from "../shared/Data";

export default function Home() {
  const [reviews, setReviews] = useState(defaultReviews);
  return (
    <View>
      <Text>Home page</Text>
    </View>
  );
}
