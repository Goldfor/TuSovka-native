import React, { Component, useState, useEffect } from 'react'
import { Animated, Platform, StyleSheet, View, Easing } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';

import { dayOptions, hourOptions } from '../../util/time';

import { IP } from '../../credentials'
import { useNavigation  } from '@react-navigation/native';

import { Dimensions, PixelRatio } from 'react-native';

import { connect } from 'react-redux';
import { updateScroll, updateDraw, updatePartyKey } from '../../actions/updateInterface'


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

    const { List } = props;
    const [ openingParty, setOpeningParty ] = useState('0');
    const [ focus, setFocus ] = useState(false);
    const [ top, setTop ] = useState(new Animated.Value(0));
    const [ paddingBottom, setPaddingBottom ] = useState(List.map((item) => 
        new Animated.Value(0)
    ));
    var refs = []
    var refs2 = []

    const navigation = useNavigation();

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setFocus(true)
        });
    
        return unsubscribe;
      }, [navigation]);

    const goToParty = (e, id) => {
        if(e.finished === true){
            setOpeningParty('0')
            navigation.navigate('Party', {_id: id})
        }
    }

    const openParty = (id, func) =>{
        if(openingParty === '0'){
            setOpeningParty(id)
            func();
        }
    }
    const startAminated = (e, id, i) => {
        updateDraw(false);
        let _h = Dimensions.get('window').height - ( refs[i].height + 80);
        refs2[i].measure((fx, fy, width, height, px, py) => {
            let LastY = py - 80;
            props.updateScroll(id, LastY, _h);
            openParty(id, () => {
                    Animated.parallel([
                        Animated.timing(paddingBottom[i], {
                        toValue: _h,
                        duration: openDuration,
                        easing: Easing.linear
                    }),
                    Animated.timing(top, {
                        toValue: -LastY,
                        duration: openDuration,
                        easing: Easing.linear
                    }),
                ]).start((e) => {
                    goToParty(e, id);
                });
            })
        })
    }

    function PartyCreat ( party, i ) {


        let _style = {...styles.container, paddingBottom: paddingBottom[i]}


        return(
            <View key={`PartyList${party._id}`}
                onLayout={comp => {refs[i] = comp.nativeEvent.layout}}
                ref={(_ref) => {refs2[i]= _ref}}
            >
            <Card
                
                style={{..._style}}
         //       onPress={(e) => startAminated(e, party._id, i)}
                onPress={(e) => {navigation.navigate('Party', {_id: party._id})}}
            >
                <Card.Cover 
                    source={{ uri: `${IP}/images/get/pict/${party.mainPhoto.id}.jpg`}}
                    style={styles.img}
                />
                <Card.Content>
                <Title>{party.name}</Title>
                <Paragraph >{party.organization}</Paragraph >
                <Paragraph >День: {new Date(party.timeStart).toLocaleDateString("ru", dayOptions).split(',')[0]}</Paragraph >
                
                {/* <Paragraph >Время начала: {new Date(party.timeStart).toLocaleTimeString("ru", hourOptions).split(',')[0]}</Paragraph >
                <Paragraph >Конец: {new Date(party.stopVerify).toLocaleDateString("ru", dayOptions)}</Paragraph >
                <Paragraph >Регестрации: {new Date(party.stopVerify).toLocaleTimeString("ru", hourOptions).split(',')[0]}</Paragraph > */}
                </Card.Content>
            </Card>
            </View>
        )
    };

    function Render () {
        if(paddingBottom.length !== List.length){
            //console.log(List)
            setPaddingBottom(List.map((item) => new Animated.Value(0)));
            refs = (List.map((item) => ({height: 0})));
            refs2 = (List.map((item) => ({})));

        }

        if(false){
            setFocus(false)
            List.forEach((party, i) => {
                // console.log(props.userInterface.partyKey, party._id)
                if(props.userInterface.partyKey === party._id){
                    Animated.parallel([
                        Animated.timing(paddingBottom[i], {
                            toValue: 0,
                            duration: closeDuration,
                            easing: Easing.out(Easing.linear)
                        }),
                        Animated.timing(top, {
                            toValue: 0,
                            duration: closeDuration,
                            easing: Easing.out(Easing.linear)
                        }),
                    ]).start((e) => {
                            setOpeningParty('0');
                            updateDraw(false);
                            props.updateScroll('0', 0, 0);
                    });
                }
            });
        }
        return (List.map(PartyCreat))
    }
    if(List == undefined){
        return null
    }
    return (
        <Animated.View
            style={{
                transform: [
                    {
                      translateY: top
                    }
                  ]
            }}
        >
            <Render />
        </Animated.View>
    );
}

export default connect(state => ({
    userInterface: state.userInterface,
}), { updateScroll, updateDraw,  } )(Party)