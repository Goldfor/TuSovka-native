import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, RefreshControl} from 'react-native';
import Icon from '../assets/icons/wink.svg'
import { Icons } from '../components/TabBarIcon'


export default class EmptyPage extends Component {

    constructor(props) {
      super(props);
    }
  
  
    render(){
      return (
        <View >
            <Text>Hello World</Text>
            <Icons Icon={Icon} />
        </View>
      );
    }
  }