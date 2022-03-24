import React from 'react';
import {Text} from 'react-native';
import {Dashboard} from './src/screens/dashboard/DashboardScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, CreateAccount} from './src/screens/dashboard/DashboardScreen';
const AuthStack = createStackNavigator();

export const App = () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="CreateAccocunt" component={CreateAccount} />
    </AuthStack.Navigator>
  </NavigationContainer>
);

export default App;
