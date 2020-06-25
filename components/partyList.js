import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, RefreshControl} from 'react-native';

import { updateTask } from '../actions/updateList'
import { connect } from 'react-redux';

import Partys from './partylist/partyList'

import { IP } from '../credentials'
import Axios from 'axios'



class partyList extends Component {

	constructor(props) {
		super(props);
		this.refresh(() => {})
	}
	  
	refresh = (e) => {
		Axios.get(`${IP}/Party/AllList`)
			.then(resp => {
				this.props.updateTask(resp.data)
				e();
			})
			.catch(err => {console.log(err)})
	}

  	render(){
		const { partyList } = this.props;
    	return (
         	<Partys List={partyList} onRefresh={this.refresh}/>
    	);
  	}
}

export default connect(state => ({
		partyList: state.partyList,
}), { updateTask } )(partyList)
