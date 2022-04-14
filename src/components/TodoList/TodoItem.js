import React from 'react';
import {View, Text, Button} from 'react-native';

export const TodoItem = ({text, toToggle, toDelete, complete}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-evenly',
        backgroundColor: complete ? 'green' : 'red',
      }}>
      <Text>{text}</Text>
      <Button title="TOGGLE" onPress={toToggle} />
      <Button title="DELETE" onPress={toDelete} />
    </View>
  );
};
