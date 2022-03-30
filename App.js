import React, {useState} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {DashboardScreen} from './src/screens/dashboard/DashboardScreen';

export const App = () => <DashboardScreen></DashboardScreen>;

export default App;
