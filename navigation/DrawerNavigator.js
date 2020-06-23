import { createDrawerNavigator  } from '@react-navigation/drawer';
import React from 'react';
import { Platform, Text, View, TouchableOpacity  } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { TabBarIonicons, TabBarMaterCommIcons } from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity  onPress={() => {props.navigation.navigate("Links")}}><Text>Hello</Text></TouchableOpacity >
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
  <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME} drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
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
