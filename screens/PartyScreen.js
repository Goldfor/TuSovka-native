import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, RefreshControl} from 'react-native';
import { useTheme } from 'react-native-paper';
import { IP } from '../credentials'

import { connect } from 'react-redux';
import OneParty from '../components/oneParty'

import { withTheme } from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
      // paddingTop: 10,
      paddingBottom: 5,
      // paddingHorizontal: 10,
      marginVertical: 10,
      marginHorizontal: 5,
      borderRadius: 20,
  },
  img: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class PartyScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    //console.log(this.props)
  } 


  render(){
    const { colors } = this.props.theme;
    return (
      <View>
        <OneParty />
      </View>
    );
  }
}

// PartyScreen.navigationOptions = {
//   header: null,
// };


export default withTheme(connect(state => ({
  ...state
}), {  } )(PartyScreen))