import React from 'react';
import { Button } from 'react-native-paper'

import { connect } from 'react-redux';
import { updateFilter } from '../actions/updateFilter'
import filter from '../constants/filter';


const colorButton = {
    0: {
        mode: 'outlined',
        dark: true,
        color: '#000000',
    },
    1: {
        mode: 'contained',
        dark: false,
        color: '#00ff00',
    },
    2: {
        mode: 'contained',
        dark: true,
        color: '#ff0000',
    }
}

function FilterButton(props){
    var state = props.filter[props.nav_key][props.name];
    return(
        <Button
            {...colorButton[state]}
            style={props.style}
            uppercase={false}
            onPress={() => {
                props.updateFilter(props.name, (state + 1) % 3, props.nav_key)
            }}
        >
            {props.children}
        </Button>
    )
}

export default connect(state => ({
    filter: state.filter,
}), { updateFilter } )(FilterButton);