import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, RefreshControl} from 'react-native';
import { useTheme } from 'react-native-paper';
import Partys from '../components/mainPartyList'
import { TabBarIonicons, TabBarMaterCommIcons } from '../components/TabBarIcon';


class HomeScreen extends Component {

  constructor(props) {
    super(props);
  }


  render(){
    return (
      <View >
         <Partys />
      </View>
    );
  }
}

export default HomeScreen

