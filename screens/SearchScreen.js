import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, RefreshControl} from 'react-native';

import FilterButton from '../components/filterButton'

import filter from '../constants/filter'
import { withTheme } from 'react-native-paper';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginHorizontal: 20,
		marginVertical: 10
	},
	button:{
		marginRight: 5,
		marginVertical: 2.5,
	}
});


class PartyScreen extends Component {

  	constructor(props) {
    	super(props);
  	}

  	componentDidMount = () => {
//    	console.log(this.props)
  	}

  	getPath = () => {
  	  	return `${this.props.route.name.split('$')[0]}$SearchList`;
  	}


  	render(){
    	return (
      		<View style={styles.container}>
        		{Object.values(filter).map(item => (
					<FilterButton
						style={styles.button}
						key={`${item.name}&${this.getPath()}`}
						nav_key={this.getPath()}
						name={item.name}
					>
						{item.nameRu}
					</FilterButton>))}
      		</View>
    	);
  	}
}


export default withTheme(PartyScreen)