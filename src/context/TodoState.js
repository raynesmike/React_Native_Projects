import React, {useReducer} from 'react';
import {TodoContext} from './TodoContext';
import {TodoReducer} from './todoReducer';
import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './todoActions';

export const TodoState = props => {
  const initialState = {
    todos: [],
  };

  const [action, dispatch] = useReducer(todoReducer, initialState);

  //ADD TODO
  const addTodo = todo => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  //TOGGLE TODO
  const toggleTodo = todoID => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoID,
    });
  };

  //DELETE TODO
  const deleteTodo = todoID => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };

  return (
    <TodoContext
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}></TodoContext>
  );
};
