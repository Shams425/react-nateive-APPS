import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "coral",
    paddingTop: 50,
    paddingBottom: 15,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
