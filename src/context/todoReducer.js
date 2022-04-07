import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './TodoActions';

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todo, action.payload],
      };
    case TOGGLE_TODO:
      return {};
    case DELETE_TODO:
      return {};
  }
};
