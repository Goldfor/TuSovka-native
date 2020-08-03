import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as React from 'react';

import Colors from '../constants/Colors';

export function TabBarIonicons(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

export function TabBarMaterCommIcons(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

export function Icons(props){
    return (
      <View style={styles.container}>
        <props.Icon width={30} height={30} />
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    color: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
