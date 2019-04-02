import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    text: "",
    usuario: "Jonilson",
    todos: [
      { id: 0, text: "Fazer café" },
      { id: 1, text: "Estudar o GoNative" }
    ]
  };

  addTodo = () => {
    this.setState({
      usuario: this.state.usuario + "3",
      todos: [...this.state.todos, { id: Math.random(), text: "Novo todo" }]
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: "Teste" });
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Text>{this.state.usuario}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
