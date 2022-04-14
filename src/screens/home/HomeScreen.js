import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
};

const ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({}) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
    <Button
      title="React Native by Example"
      onPress={() => navigation.push('Details')}
    />
    <Button
      title="React Native School"
      onPress={() => navigation.push('Details')}
    />
    <Button title="Drawer" onPress={() => alert('todo')} />
  </ScreenContainer>
);

export const Details = () => (
  <ScreenContainer>
    <Text>Details Screen</Text>
  </ScreenContainer>
);

export const Search = ({navigation}) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search2" onPress={() => alert('todo')} />
    <Button title="React Native School" onPress={() => alert('todo')} />
  </ScreenContainer>
);

export const Screen2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({navigation}) => (
  <ScreenContainer>
    <Text>Profile Screen</Text>
    <Button title="Drawer" onPress={() => alert('todo')} />
    <Button title="Sign Out" onPress={() => alert('todo')} />
  </ScreenContainer>
);

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({navigation}) => (
  <ScreenContainer>
    <Text>Sign In Screen</Text>
    <Button title="Sign In" onPress={() => navigation.push('SignIn')} />
    <Button
      title="Create Account"
      onPress={() => navigation.push('CreateAccount')}
    />
  </ScreenContainer>
);

export const CreateAccount = ({navigation}) => (
  <ScreenContainer>
    <Text>Create Account Screen</Text>
    <Button title="Sign Up" onPress={() => alert('todo')} />
  </ScreenContainer>
);
