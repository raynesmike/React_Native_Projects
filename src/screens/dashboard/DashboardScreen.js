import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const DashboardScreen = () => {
  const [myAuthToken, setMyAuthToken] = useState();
  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('authKey');
      if (value !== null) {
        setMyAuthToken(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  onLogin = async () => {
    try {
      setMyAuthToken('This is my auth');
      await AsyncStorage.setItem('authKey', 'This is my auth');
    } catch (error) {
      console.log(error);
    }
  };

  onLogout = async () => {
    try {
      const value = await AsyncStorage.removeItem('authKey');
      setMyAuthToken('');
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{justifyContent: 'center'}}>
      {!myAuthToken ? (
        <>
          <Text>Sign in Page</Text>
          <Button
            title="Login"
            onPress={() => {
              this.onLogin();
            }}
          />
        </>
      ) : (
        <>
          <Text>Dashboard Page</Text>
          <Button title="Logout" onPress={() => this.onLogout()} />
        </>
      )}

      <Text>{JSON.stringify(myAuthToken)}</Text>
    </View>
  );
};
