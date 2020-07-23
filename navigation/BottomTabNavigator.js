import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TabBarIonicons, TabBarMaterCommIcons } from '../components/TabBarIcon';
import HomeScreen from './MainStackNavigator';
import Empty1 from '../screens/EmptyPage';

const BottomTab = createBottomTabNavigator();


export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          title: 'Главная',
          tabBarIcon: ({ focused }) => <TabBarMaterCommIcons focused={focused} name="view-list" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={Empty1}
        options={{
          title: 'Навигация',
          tabBarIcon: ({ focused }) => <TabBarIonicons focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

