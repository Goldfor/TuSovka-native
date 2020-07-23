import * as React from 'react';
import { IconButton, TouchableRipple } from 'react-native-paper'
import { useNavigation, useRoute } from "@react-navigation/native"

import { connect } from 'react-redux';

import { updateFilterObj } from '../actions/updateFilter'

import { MaterialIcons } from './Icon'

function AMaterialButton(props){

    const navigation = useNavigation();

    const route = useRoute().name.split('$')[0];


    return (
        <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" >
            <IconButton style={props.style} 
                onPress={() => {props.onPress(route, props.updateFilterObj)}}
                animated={true}
                icon={(_props) => (
                    <MaterialIcons {..._props} name={props.name} />
                )}
            />
        </TouchableRipple>)
}

export const MaterialButton = connect(state => ({}),
    {updateFilterObj } )(AMaterialButton);
