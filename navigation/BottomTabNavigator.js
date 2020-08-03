import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TabBarIonicons, TabBarMaterCommIcons, Icons } from '../components/TabBarIcon';
import HomeScreen from './MainStackNavigator';
import Empty1 from '../screens/EmptyPage';
import HomeIcon from '../assets/icons/home.svg'

const BottomTab = createBottomTabNavigator();


export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <BottomTab.Navigator
    tabBarOptions={{
      showLabel: false
    }}>
      <BottomTab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <Icons focused={focused} Icon={HomeIcon} />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={Empty1}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIonicons focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

