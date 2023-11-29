import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native'
import React from 'react'
import InicioSC from './screens/InicioSC';
import UniversidadSC from './screens/UniversidadSC';

export default function Navegacion() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown : false
    }}>
      <Stack.Screen name="Home" component={InicioSC} />
      <Stack.Screen name="Universidad" component={UniversidadSC} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

