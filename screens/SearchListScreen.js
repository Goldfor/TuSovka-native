import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, RefreshControl} from 'react-native';

import { connect } from 'react-redux';

import { updateFilter } from '../actions/updateFilter'
import { updateTask } from '../actions/updateList'

import filterList from '../constants/filter'

import Partys from '../components/partylist/partyList'
import { withTheme } from 'react-native-paper';

import { IP } from '../credentials'
import Axios from 'axios'

class PartyScreen extends Component {

  	constructor(props) {
    	super(props);
  	}

  	componentDidMount = () => {
//    	console.log(this.props)
  	}

  	refresh = (e) => {

		var ruler = [];
        var notRuler = [];
        
        Object.keys(filterList).forEach(key => {
            if(this.props.filter[this.getPath()][key] == '1'){
                ruler.push(key);
            }
            if(this.props.filter[this.getPath()][key] == '2'){
             notRuler.push(key);
            }
        })
		Axios.get(`${IP}/Party/findParty`, {
  	  	params: {
			ruler: ruler.join("$"),
			notRuler: notRuler.join("$"),
  	      	name: this.props.filter[this.getPath()].name
  	      }
  		})
  	  .then(resp => {
  	    	this.props.updateTask(resp.data, this.getPath())
			// console.log(resp.data)
			e();
		})
		.catch(err => {console.log(err)})
  	}

  	getPath = () => {
  	  	return `${this.props.route.name.split('$')[0]}$SearchList`;
  	}


  	render(){
    	const { partyList } = this.props;
    	return (
      		<View>
        		<Partys List={partyList} Key={this.getPath()} onRefresh={this.refresh}/>
      		</View>
    	);
  	}
}


export default withTheme(connect(state => ({
  	filter: state.filter,
  	partyList: state.partyList,
}), { updateFilter, updateTask } )(PartyScreen))