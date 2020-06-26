import React, { Component, useState, useEffect } from 'react'
import { Animated, Platform, StyleSheet, View, Easing, ScrollView, Image } from 'react-native';
import { List, Card, Title, Paragraph, Dialog } from 'react-native-paper';

import { dayOptions, hourOptions } from '../util/time';
import { Dimensions, PixelRatio } from 'react-native';

import { IP } from '../credentials'
import { useNavigation  } from '@react-navigation/native';

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

    let _h = () => (Dimensions.get('window').height - 100);
    let _w = () => (Dimensions.get('window').width - 20);


    function _oneParty () {

        let _style = {...styles.container}

        let party = {}
        List.forEach(item => {
            if(item._id === userInterface.partyKey) party = item;
        });

        // var images = party.photos.map(item => ({ uri: `${IP}/images/get/pict/${item.id}.jpg`}))
        // console.log(images)
        var images = party.photos.map((item, _i) => ( <Card.Cover  key={`CardImagesKey${item.id}+${_i}`} source={{ uri: `${IP}/images/get/pict/${item.id}.jpg`}} style={styles.img}/>))

        return(
            <View
                style={{
                    backgroundColor: colors.background,
                }}
            >
                <View

                    style={{..._style, 
                        height: _h(),
                        backgroundColor: colors.surface,
                    }}
                    onPress={(e) => {}}
                >
                    {/* <Card.Cover 
                        source={{ uri: `${IP}/images/get/pict/${party.mainPhoto.id}.jpg`}}
                        style={styles.img}
                    /> */}
                    {/* <GallerySwiper style={styles.img}
    //                    scrollViewStyle={styles.img} 
                        images={images} resizeMode={'cover'}
                        imageComponent={(pr) => <Card.Cover {...pr} style={styles.img}/>}
                        resistantStrVertical={0}
                        enableTranslate={false}
                    /> */}
                    <Swiper style={styles.img} showsButtons loop={false}>{images}</Swiper>
                    <Card.Content>
                        <ScrollView
                            style={{ height: _h() - 200}}
                            showsVerticalScrollIndicator={false}
                        >
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
                    </Card.Content>
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