import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./app/components/header/Header";
import TodoItems from "./app/components/todoList/TodoItems";
import { todoList } from "./app/shared/data";
import { FlatList } from "react-native";

export default function App() {
  const [todo, setTodo] = useState(todoList);

  //delete a todo item
  const deleteHandler = (key) => {
    return setTodo((prevState) => prevState.filter((item) => item.key !== key));
  };
  return (
    <View style={styles.container}>
      <Header />

      {/* displying the todo items */}
      <FlatList
        data={todo}
        renderItem={({ item }) => (
          <TodoItems item={item} deleteItem={deleteHandler} />
        )}
        style={styles.listStyle}
      />
    </View>
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
