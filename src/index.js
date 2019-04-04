import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Button,
} from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

// import Todo from './components/Todo';
import Todo from '~/components/Todo';

export default class App extends Component {
  state = {
    // text: '',
    usuario: 'Jonilson',
    todos: [{ id: 0, text: 'Fazer café' }, { id: 1, text: 'Estudar o GoNative' }],
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ text: 'Teste' });
  //   }, 5000);
  // }

  addTodo = () => {
    this.setState({
      usuario: `${this.state.usuario}3`,
      todos: [...this.state.todos, { id: Math.random(), text: 'Novo todo' }],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>{this.state.text}</Text>
        <Text>{this.state.usuario}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} /> */}
        <Todo title="Fazer café" />
        <Todo title="Estudar o GoNative" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [{ rotateZ: '20deg' }],
  },

  boxText: {
    color: '#FFF',
  },
});
