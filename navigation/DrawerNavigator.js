import { createDrawerNavigator  } from '@react-navigation/drawer';
import React from 'react';
import { Platform, Text, View, TouchableOpacity  } from 'react-native';
import Home, { HeadersHomeScreen } from '../screens/MainScreen'
import StackNavigator from './MainStackNavigator'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import HomeScreen from '../screens/MainScreen';

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Home1';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator({ navigation, route }) {
  navigation.setOptions({header: HeadersHomeScreen})
  //navigation.setOptions({title: "ROOT"})

  return (
  <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME} drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
      <Drawer.Screen
        name="Home1"
        component={StackNavigator}
      />
    </Drawer.Navigator>
  );
}

