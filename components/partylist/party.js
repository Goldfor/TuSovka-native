import React, { Component, useState, useEffect } from 'react'
import { Animated, Platform, StyleSheet, View, Easing } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';

import { dayOptions, hourOptions } from '../../util/time';

import { IP } from '../../credentials'
import { useNavigation, useRoute, StackActions } from '@react-navigation/native';

import { Dimensions, PixelRatio } from 'react-native';

import { connect } from 'react-redux';


const openDuration = 500;
const closeDuration = 500;


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


function Party(props){

    const { List, Key } = props;

    const navigation = useNavigation();

    const route = useRoute().name.split('$')[0];



    function PartyCreat ( party, i ) {


        let _style = {...styles.container}


        return(
            <View key={`PartyList${party._id}`}>
                <Card

                    style={{..._style}}
                    onPress={(e) => {navigation.navigate(`${route}$Item`, {_id: party._id, Key: Key, name: party.name})}}
                >
                    <Card.Cover 
                        source={{ uri: `${IP}/images/get/pict/${party.mainPhoto.id}.jpg`}}
                        style={styles.img}
                    />
                    <Card.Content>
                    <Title>{party.name}</Title>
                    <Paragraph >{party.organization}</Paragraph >
                    <Paragraph >День: {new Date(party.timeStart).toLocaleDateString("ru", dayOptions).split(',')[0]}</Paragraph >

                    </Card.Content>
                </Card>
            </View>
        )
    };

    function Render () {
        if(List?.length === 0){
            return (
                <View>
                    <Title style={{height: 1000}}>Ничего не найденно</Title>
                </View>
            )
        }

        if(List ==  undefined){
            return (
                <View>
                    <Title style={{height: 1000}}>Ничего не найденно</Title>
                </View>
            )
        }

        return (List.map(PartyCreat))
    }
    return (
        <Render />
    );
}

export default connect(state => ({
    userInterface: state.userInterface,
}), {} )(Party)