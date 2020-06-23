import React, { Component } from 'react'
import { Platform, StyleSheet, View } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import { dayOptions, hourOptions } from '../../util/time';
import { IP } from '../../credentials'


const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginHorizontal: 5
    },
    display: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});


export default class Party extends Component {

    constructor(props) {
        super(props);
    }

    Party = ( party ) => {
        console.log(party)
        return(
            <Card key={`PartyList${party._id}`} style={styles.container}>
                <Card.Cover source={{ uri: `${IP}/images/get/pict/${party.mainPhoto._id}.jpg`}}/>
                <Title>{party.name}</Title>
                <Paragraph >{party.organization}</Paragraph >
                <Paragraph >День: {new Date(party.timeStart).toLocaleDateString("ru", dayOptions).split(',')[0]}</Paragraph >
                <Paragraph >Время начала: {new Date(party.timeStart).toLocaleTimeString("ru", hourOptions).split(',')[0]}</Paragraph >
                <Paragraph >Конец: {new Date(party.stopVerify).toLocaleDateString("ru", dayOptions)}</Paragraph >
                <Paragraph >Регестрации: {new Date(party.stopVerify).toLocaleTimeString("ru", hourOptions).split(',')[0]}</Paragraph >
            </Card>
        )
    }



    render() {
        var { List } = this.props;
        if(List == undefined){
            return null
        }
        return (
            List.map(this.Party)
        );
    }
}