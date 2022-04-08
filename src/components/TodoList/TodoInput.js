import React, {useState, useContext, createContext} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {TodoContext} from '../../context/TodoContext';
import {TodoItem} from './TodoItem';
import {TodoState} from '../../context/TodoState';
import {set} from 'react-native-reanimated';

export const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const [newText, setNewText] = useState();
  const {addTodo} = useContext(TodoContext);

  const onSetTodo = e => {
    setTodo(e);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      text: todo,
      complete: false,
    };
    addTodo(newTodo);
    setTodo('');
  };

  return (
    <>
      <View>
        <TextInput
          style={{height: 40, borderColor: 'black', borderWidth: 5}}
          placeholder="Enter Todo"
          onChangeText={onSetTodo}
          value={todo}></TextInput>
        <Text>{todo}</Text>
        <Button title="add" onPress={onSubmitHandler} />
      </View>
    </>
  );
};
