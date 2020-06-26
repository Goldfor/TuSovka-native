import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import DrawerNavigator from './navigation/DrawerNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import { Provider as PaperProvider, DarkTheme as Theme} from 'react-native-paper';
import { Provider as ReduxProvider} from 'react-redux';
import store from './store'


const Stack = createStackNavigator();

export default function App(props) {

	Theme.colors.background = "#7B15BF";
	Theme.colors.surface = "#1E0D8C";
 	const isLoadingComplete = useCachedResources();

  	if (false) {
    	return null;
	  }
	else {
    	return (
      	<ReduxProvider store={store}>
      	  	<PaperProvider theme={Theme}>
      	  	  	<NavigationContainer linking={LinkingConfiguration}>
      	  	    	<Stack.Navigator>
      	  	     		<Stack.Screen name="Root" component={DrawerNavigator} />
      	  	    	</Stack.Navigator>
      	  	  	</NavigationContainer>
      	  	</PaperProvider>
      	</ReduxProvider>
    );
  }
}
