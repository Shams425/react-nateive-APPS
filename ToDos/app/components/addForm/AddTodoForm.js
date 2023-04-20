import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useRef, useState } from "react";

export default function AddTodoForm(props) {
  const [todo, setTodo] = useState("");
  const inputFiled = useRef(null);

  const changeText = (val) => {
    setTodo(val);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Add Todo"
        style={styles.inputFiled}
        onChangeText={changeText}
        ref={inputFiled}
      />
      <Button
        title="Add Todo"
        color="coral"
        onPress={() => {
          props.addItem(todo);
          inputFiled.current.clear();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 15,
    padding: 15,
  },
  inputFiled: {
    padding: 8,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});
