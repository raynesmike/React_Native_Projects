import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const getToken = async setMyAuthToken => {
  try {
    const value = await AsyncStorage.getItem('authKey');
    if (value !== null) {
      setMyAuthToken(value);
    }
  } catch (error) {
    console.error(error);
  }
};

const onLogin = async setMyAuthToken => {
  try {
    setMyAuthToken('This is my auth');
    await AsyncStorage.setItem('authKey', 'This is my auth');
  } catch (error) {
    console.error(error);
  }
};

const onLogout = async setMyAuthToken => {
  try {
    const value = await AsyncStorage.removeItem('authKey');
    setMyAuthToken();
    if (value !== null) {
      console.log(value);
    }
  } catch (error) {
    console.error(error);
  }
};

export const DashboardScreen = () => {
  const [myAuthToken, setMyAuthToken] = useState();
  useEffect(() => {
    getToken(setMyAuthToken);
  }, []);

  return (
    <View style={{justifyContent: 'center'}}>
      {myAuthToken ? (
        <>
          <Text>Dashboard Page</Text>
          <Button title="Logout" onPress={() => onLogout(setMyAuthToken)} />
        </>
      ) : (
        <>
          <Text>Sign in Page</Text>
          <Button title="Login" onPress={() => onLogin(setMyAuthToken)} />
        </>
      )}

      <Text>{myAuthToken}</Text>
    </View>
  );
};
