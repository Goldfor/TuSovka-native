import { createMaterialTopTabNavigator, MaterialTopTabBar, MaterialTopTabBarOptions } from '@react-navigation/material-top-tabs';
import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';


import Home from '../screens/MainScreen'
import Empty1 from '../screens/EmptyPage';

import { useTheme } from 'react-native-paper';

import { MaterialButton } from '../components/buttonIcon'


const TopTab = createMaterialTopTabNavigator ();


export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <TopTab.Navigator 
        tabBar={props => <MyTabBar {...props} />}
    >
      <TopTab.Screen
        name="Main$List"
        component={Home}
        options={{
          title: 'Афиша',
        }}
      />
      <TopTab.Screen
        name="_Links"
        component={Empty1}
        options={{
          title: 'События',
        }}
      />
    </TopTab.Navigator>
  );
}

function MyTabBar(props) {
    const { state, descriptors, navigation, position, routes, navigationState } = props;
    const theme = useTheme();
    if(navigationState.routes[0].state?.index === 1  && navigationState.index === 0)
        return null
    return (
        <View style={{ height: 70, backgroundColor: theme.colors.surface,  flexDirection: 'row' }}>
            <View style={{width: 50, backgroundColor: 'powderblue'}} />
            <View style={{ flexDirection: 'row', flex:1}}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;
                
                    const isFocused = state.index === index;
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };
              
                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const inputRange = state.routes.map((_, i) => i);
                    const borderColor = Animated.interpolate(position, {
                        inputRange,
                        outputRange: inputRange.map(i => (i !== index ? 0 : 1)),
                    });
              
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', marginLeft: 5, marginRight: 5}}
                            key={`keyMainTopTab${index}`}
                        >
                            <Animated.Text style={{ borderColor: Animated.color(0, 0, 0, 1), borderBottomWidth: borderColor, flex: 1, textAlign: 'center', paddingBottom: 5, fontSize: 16}}>
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View style={{width: 50, flexDirection: 'row', alignItems: 'flex-end', backgroundColor: 'powderblue'}}>
            <MaterialButton
                            onPress={(path, update) => {
                                update(`${path}$SearchList`, true)
                                navigation.navigate(`${path}$Search`)}}
                            style={{
                                marginRight: 10,
                                height: 30,
                            }}
                            name={"search"}
                    />
            </View>
        </View>
    );
}

