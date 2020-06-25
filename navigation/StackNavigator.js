import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Home from '../screens/HomeScreen'
import Party from '../screens/PartyScreen'

const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 0,
  },
};

export default function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="Party"
          component={Party}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}/>
      </Stack.Navigator>
    );
}

