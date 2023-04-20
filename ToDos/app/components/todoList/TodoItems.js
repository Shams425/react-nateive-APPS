import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "../../../node_modules/@expo/vector-icons";

export default function TodoItems({ item, deleteItem }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={18} color="#333" />
        </TouchableOpacity>
        <Text style={styles.listItem}>{item.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
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
