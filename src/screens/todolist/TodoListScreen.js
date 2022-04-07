import React, {useContext} from 'react';
import {View, Text, TextInput} from 'react-native';
import {TodoInput} from '../../components/TodoList/TodoInput';
import {TodoItem} from '../../components/TodoList/TodoItem';
import {TodoState} from '../../context/TodoState';
import {TodoContext} from '../../context/TodoContext';

export const TodoListScreen = () => {
  const {todos} = useContext(TodoContext);
  return (
    <View style={{borderColor: 'black', borderWidth: 5, padding: 5}}>
      <TodoInput />
      <TodoItem></TodoItem>
      {todos.map(todo => (
        <TodoItem key={todo.id} text={todo} />
      ))}
    </View>
  );
};
