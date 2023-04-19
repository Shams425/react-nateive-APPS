import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TodoItems({ item, deleteItem }) {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => deleteItem(item.key)}
    >
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    paddingLeft: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#bbb",
    marginBottom: 20,
    padding: 15,
    letterSpacing: 1.1,
  },
});
