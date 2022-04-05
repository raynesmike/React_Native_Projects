import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {TodoContext} from '../../context/todoContext';
import {TodoItem} from './TodoItem';

export const TodoInput = () => {
  const [todo, setTodo] = useState();
  //   const [newText, setNewText] = useState();
  //   const {addTodo} = useContext(TodoContext);

  const onChangeHandler = event => {
    setTodo(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    const newTodo = {id: Math.random(), text: todo, complete: false};

    // addTodo();

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
        <Button title="add" />
      </View>
      <View>
        <Text>TO-DOS</Text>
        <TodoItem />
      </View>
    </>
  );
};
