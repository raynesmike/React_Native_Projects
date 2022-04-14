import React, {useState} from 'react';
import {TodoListScreen} from './src/screens/todolist/TodoListScreen';
import {TodoContext} from './src/context/TodoContext';
import {TodoState} from './src/context/TodoState';

export const App = () => (
  <TodoState>
    <TodoListScreen></TodoListScreen>
  </TodoState>
);

export default App;
