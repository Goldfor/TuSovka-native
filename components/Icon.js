import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons as _MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import * as React from 'react';

import Colors from '../constants/Colors';

export function Icons(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={Colors.tabIconDefault}
    />
  );
}

export function MaterialComIcons(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={Colors.iconColor}
    />
  );
}

export function MaterialIcons(props) {
  return (
    <_MaterialIcons
      name={props.name}
      size={props.size}
      style={props.style}
      color={props.color}
    />
  );
}

export function AntDesignIcons(props) {
  return (
    <AntDesign
      name={props.name}
      size={24}
      style={{ marginRight: 20 }}
      color={Colors.iconColor}
    />
  );
}
