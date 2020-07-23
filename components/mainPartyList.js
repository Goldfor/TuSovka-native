import React, { Component } from 'react';

import { updateTask } from '../actions/updateList'
import { connect } from 'react-redux';

import Partys from './partylist/partyList'

import { IP } from '../credentials'
import Axios from 'axios'

import { useRoute } from '@react-navigation/native';



class partyList extends Component {

	constructor(props) {
		super(props);
		this.refresh(() => {});
	}
	  
	refresh = (e) => {
		Axios.get(`${IP}/Party/AllList`)
			.then(resp => {
				this.props.updateTask(resp.data, "Main")
				e();
			})
			.catch(err => {console.log(err.message)})
	}

  	render(){
		const { partyList } = this.props;
    	return (
         	<Partys List={partyList} Key={"Main"} onRefresh={this.refresh}/>
    	);
  	}
}

export default connect(state => ({
		partyList: state.partyList,
}), { updateTask } )(partyList)
