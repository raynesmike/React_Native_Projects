import React, {useState, useContext, createContext} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {TodoContext} from '../../context/TodoContext';
import {TodoItem} from './TodoItem';
import {TodoState} from '../../context/TodoState';

export const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const [newText, setNewText] = useState();
  //   const {addTodo} = useContext(TodoState);

  const onSubmitHandler = e => {
    e.preventDefault();
    const newTodo = {id: Math.random(), text: todo, complete: false};
    // addTodo(newTodo);
    setTodo('');
  };

  return (
    <>
      <View>
        <TextInput
          style={{height: 40, borderColor: 'black', borderWidth: 5}}
          placeholder="Enter Todo"
          onChangeText={todo => setTodo(todo)}
          value={todo}></TextInput>
        <Text>{todo}</Text>
        <Button title="add" onPress={onSubmitHandler} />
      </View>
    </>
  );
};
