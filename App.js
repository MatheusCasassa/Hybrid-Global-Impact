import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from './components/screens/Cadastro';
import Home from './components/screens/Home';
import Login from './components/screens/Login';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          component={Login}
          name='Login' />

        <Stack.Screen
          component={Cadastro}
          name='Cadastro' />

        <Stack.Screen
          component={Home}
          name='Home' />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App