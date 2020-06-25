import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, RefreshControl} from 'react-native';
import { useTheme } from 'react-native-paper';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import { IP } from '../credentials'

import { connect } from 'react-redux';
import { updateDraw } from '../actions/updateInterface'


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
    return (
      <View style={styles.container}>
      <Card style={styles.container}
                key={`PartyList${1}`}
                style={{paddingBottom: 400}}
            >
                <Card.Cover 
                    source={{ uri: `${IP}/images/get/pict/${2}.jpg`}}
                    style={styles.img}
                />
                <Card.Content>
                <Title>Лох</Title>
                <Paragraph >Лох</Paragraph >
                <Paragraph >День: лох</Paragraph >
                
                {/* <Paragraph >Время начала: {new Date(party.timeStart).toLocaleTimeString("ru", hourOptions).split(',')[0]}</Paragraph >
                <Paragraph >Конец: {new Date(party.stopVerify).toLocaleDateString("ru", dayOptions)}</Paragraph >
                <Paragraph >Регестрации: {new Date(party.stopVerify).toLocaleTimeString("ru", hourOptions).split(',')[0]}</Paragraph > */}
                </Card.Content>
            </Card>
            </View>
    );
  }
}

// PartyScreen.navigationOptions = {
//   header: null,
// };


export default connect(state => ({
  userInterface: state.userInterface,
}), { updateDraw } )(PartyScreen)