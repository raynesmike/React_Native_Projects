import React from 'react';
import {View, Text, Button} from 'react-native';

export const TodoItem = ({text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-evenly',
      }}>
      <Text>TO-DOS</Text>
      <Text>{text}</Text>
      <Button title="TOGGLE" />
      <Button title="DELETE" />
    </View>
  );
};
