import { createDrawerNavigator  } from '@react-navigation/drawer';
import React from 'react';
import { Platform, Text, View, TouchableOpacity  } from 'react-native';
import StackNavigator from './StackNavigator'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Home1';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
  <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME} drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
      <Drawer.Screen
        name="Home1"
        component={StackNavigator}
      />
    </Drawer.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
  }
}
