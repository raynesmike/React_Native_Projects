import React, {useReducer} from 'react';
import {TodoContext} from './TodoContext';
import {TodoReducer} from './TodoReducer';
import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './TodoActions';

export const TodoState = props => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

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
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
};
