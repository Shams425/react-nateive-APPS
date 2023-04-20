import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "../../../node_modules/@expo/vector-icons";

export default function TodoItems({ item, deleteItem }) {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => deleteItem(item.key)}
    >
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.listItem}>{item.text}</Text>
      </View>
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  listItem: {
    marginLeft: 10,
  },
});
