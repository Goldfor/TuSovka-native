import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Home from './TopTabMainNavigator'
import Party from '../screens/PartyScreen'
import { MaterialButton } from '../components/buttonIcon'

import { Title } from 'react-native-paper';


import { CreatSearch, CreatSearchList } from './AddToStackSearch'
const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 0,
  },
};

export default function MyStack({ navigation, route }) {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main$List_"
                component={Home}
                options={{
                    header:(({}) => (null)),
                    headerTitle: ({}) => (<Title>{"Главная"}</Title>),
                    headerRight: (e) => (
                        <MaterialButton
                            onPress={(path, update) => {
                                update(`${path}$SearchList`, true)
                                navigation.navigate(`${path}$Search`)}}
                            style={{
                                marginRight: 10,
                                height: 30,
                            }}
                            name={"search"}
                    />)
                }}
            />
            <Stack.Screen
                name="Main$Item"
                component={Party}
                options={{
                    headerTitle: ({}) => (<Title>{route.state.routes[route.state?.routes.length - 1].params.name}</Title>),
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            />
            {CreatSearch(Stack, "Main")}
            {CreatSearchList(Stack, "Main")}
      </Stack.Navigator>
    );
}

