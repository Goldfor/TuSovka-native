import React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import { Title } from 'react-native-paper';

import SearchScreen from '../screens/SearchScreen'
import SearchListScreen from '../screens/SearchListScreen'
import { MaterialButton } from '../components/buttonIcon'

import { CardStyleInterpolators } from '@react-navigation/stack'

import { connect } from 'react-redux';

import { updateFilter } from '../actions/updateFilter'
import { updateTask } from '../actions/updateList'

import { useNavigation, useRoute } from '@react-navigation/native'

import filterList from '../constants/filter'

import { IP } from '../credentials'
import Axios from 'axios'

export function CreatSearch(Stack, path){
    return (
        <Stack.Screen
            name={`${path}$Search`}
            component={SearchScreen}
            options={{
            headerTitle: ({}) => (<ASearch />),
            headerRight: () => (<AButton />
            )
        }}
        />
    )
}

export function CreatSearchList(Stack, path){
    return (
        <Stack.Screen
            name={`${path}$SearchList`}
            component={SearchListScreen}
            options={{
            headerTitle: ({}) => (<Title>Поиск</Title>),
            headerRight: () => (<Title> </Title>),
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        />
    )

}


function Button(props){
    const navigation = useNavigation();
    const path = useRoute().name.split('$')[0];

    function fetchData(route, upd){
        var ruler = [];
        var notRuler = [];
        
        Object.keys(filterList).forEach(key => {
            if(props.filter[`${path}$SearchList`][key] == '1'){
                ruler.push(key);
            }
            if(props.filter[`${path}$SearchList`][key] == '2'){
             notRuler.push(key);
            }
        })

        Axios.get(`${IP}/Party/findParty`, {
            params: {
                ruler: ruler.join("$"),
                notRuler: notRuler.join("$"),
                name: props.filter[`${path}$SearchList`].name
            }
        })
		.then(resp => {
            props.updateTask(resp.data, `${path}$SearchList`)
            // console.log(resp.data)
            navigation.navigate(`${path}$SearchList`)
		})
		.catch(err => {console.log(err)})
        wait(2000).then(() => {
        });
    }

    function wait(timeout) {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
    }

    return (
        <MaterialButton
            onPress={fetchData}
                style={{
                    marginRight: 10,
                    height: 30,
                }}
                name={"search"}
        />
    )
}
const AButton = connect(state => ({
    filter: state.filter,
}), { updateTask } )(Button);


function Search (props){
    const theme = useTheme();
    const path = useRoute().name.split('$')[0];
    //console.log(props.filter)
    return (
      <TextInput
        mode="outlined"
        placeholder='Поиск'
        value={props.filter[`${path}$SearchList`].name}
        onChangeText={text => {
            props.updateFilter("name", text, `${path}$SearchList`)
        }}
        selectionColor={theme.colors.text}
        underlineColor={theme.colors.background}
        style={{
            height: 30,
            background: theme.colors.background,
            color: theme.colors.text,
        }}
      />
    );
};

const ASearch = connect(state => ({
    filter: state.filter,
}), { updateFilter } )(Search);