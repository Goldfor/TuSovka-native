import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, RefreshControl} from 'react-native';


export default class EmptyPage extends Component {

    constructor(props) {
      super(props);
    }
  
  
    render(){
      return (
        <View >
            <Text>Hello World</Text>
        </View>
      );
    }
  }