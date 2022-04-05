import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {TodoInput} from '../../components/TodoList/TodoInput';
import TodoState from '../../context/TodoState';

export const TodoListScreen = () => {
  return (
    <>
      <View>
        <TodoInput></TodoInput>
      </View>
    </>
  );
};
