import React, {useContext} from 'react';
import {View, Text, TextInput} from 'react-native';
import {TodoInput} from '../../components/TodoList/TodoInput';
import {TodoItem} from '../../components/TodoList/TodoItem';
import {TodoState} from '../../context/TodoState';
import {TodoContext} from '../../context/TodoContext';

export const TodoListScreen = () => {
  const {todos, toggleTodo, deleteTodo} = useContext(TodoContext);
  console.log(todos);

  return (
    <View style={{borderColor: 'black', borderWidth: 5, padding: 5}}>
      <TodoInput />
      <Text>TO-DOS</Text>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          complete={todo.complete}
          toToggle={() => {
            toggleTodo(todo.id);
          }}
          toDelete={() => {
            deleteTodo(todo.id);
          }}
        />
      ))}
    </View>
  );
};
