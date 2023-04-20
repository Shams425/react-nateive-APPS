import { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Alert,
} from "react-native";
import Header from "./app/components/header/Header";
import TodoItems from "./app/components/todoList/TodoItems";
import { todoList } from "./app/shared/data";
import { FlatList } from "react-native";
import AddTodoForm from "./app/components/addForm/AddTodoForm";

export default function App() {
  const [todo, setTodo] = useState(todoList);

  //delete a todo item
  const deleteHandler = (key) => {
    return setTodo((prevState) => prevState.filter((item) => item.key !== key));
  };

  const addTodo = (item) => {
    if (item.length > 3) {
      setTodo((prevState) => {
        return [{ text: item, key: Math.random().toString() }, ...prevState];
      });
    } else {
      Alert.alert("Warning", "Todo item should be more then 3 characters", [
        "Ok",
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />

        <AddTodoForm addItem={addTodo} />
        <FlatList
          data={todo}
          renderItem={({ item }) => (
            <TodoItems item={item} deleteItem={deleteHandler} />
          )}
          style={styles.listStyle}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: 80,
  },
  listStyle: {
    marginTop: 20,
  },
});
