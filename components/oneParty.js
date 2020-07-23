import React, { Component, useState, useEffect } from 'react'
import { Animated, Platform, StyleSheet, View, Easing, ScrollView, Image } from 'react-native';
import { List, Card, Title, Paragraph, Dialog } from 'react-native-paper';

import { dayOptions, hourOptions } from '../util/time';
import { Dimensions, PixelRatio } from 'react-native';

import { IP } from '../credentials'
import { useNavigation, useRoute } from '@react-navigation/native';

import { connect } from 'react-redux';

import { useTheme  } from 'react-native-paper';

import GallerySwiper from "react-native-gallery-swiper"

import Swiper from 'react-native-swiper'



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
        height: 300
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});


function OneParty(props){

    const { List, userInterface } = props;

    const { colors } = useTheme();

    const navigation = useNavigation();
    const route = useRoute();

    console.log()

    let _h = () => (Dimensions.get('window').height - 100);
    let _w = () => (Dimensions.get('window').width - 20);


    function _oneParty () {

        let _style = {...styles.container}

        let party = {}
        List[route.params.Key].forEach(item => {
            if(item._id === route.params._id) party = item;
        });

        var images = party.photos.map((item, _i) => (
            <Card.Cover key={`CardImagesKey${item.id}+${_i}`}
                source={{ uri: `${IP}/images/get/pict/${item.id}.jpg`}}
                style={styles.img}/>
        ))

        return(
            <View
                style={{
                    backgroundColor: colors.background,
                }}
            >
                <View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <Swiper style={styles.img} showsButtons loop={false}>{images}</Swiper>
                        <Title>{party.name}</Title>
                        <Paragraph >{party.organization}</Paragraph >
                        <Paragraph >{party.description}</Paragraph >
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Title>{party.name}</Title>
                        <Paragraph >День: {new Date(party.timeStart).toLocaleDateString("ru", dayOptions).split(',')[0]}</Paragraph >
                        <Paragraph >Время начала: {new Date(party.timeStart).toLocaleTimeString("ru", hourOptions).split(',')[0]}</Paragraph >
                        <Paragraph >Конец: {new Date(party.stopVerify).toLocaleDateString("ru", dayOptions)}</Paragraph >
                        <Paragraph >Регестрации: {new Date(party.stopVerify).toLocaleTimeString("ru", hourOptions).split(',')[0]}</Paragraph >
                    </ScrollView>
                </View>
            </View>
        )
    };

    function Render () {
        return <_oneParty />
    }
    if(List == undefined){
        return null
    }
    return (
        <Render />
    );
}

export default connect(state => ({
    userInterface: state.userInterface,
    List: state.partyList
}), { } )(OneParty)