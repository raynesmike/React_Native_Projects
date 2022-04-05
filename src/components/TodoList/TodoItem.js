import React from 'react';
import {View, Text, Button} from 'react-native';

export const TodoItem = ({todo}) => {
  return (
    <View>
      <Text>{todo}</Text>
      <Button title="TOGGLE" />
      <Button title="DELETE" />
    </View>
  );
};
