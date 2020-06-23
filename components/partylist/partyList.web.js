import React, { Component } from 'react'
import { Platform, StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import Party from './party';

const styles = StyleSheet.create({
    container: {
        marginVertical: '3%',
        marginHorizontal: '3%',
        backgroundColor: '#FFFFFF',
    },
    display: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});

function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
}

class PartyList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            List: props.List,
            refreshing: false
        };

    }


    onRefresh() {
        wait(2000).then(() => {
            var {List} = this.state;
            this.setState({
                List: [...List, ...List],
                refreshing: false
            });
        })
        this.setState({refreshing: true})
    }

    render() {
        var { List, refreshing } = this.state;
        return (
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
                    }
                    >
                        <Party List={List}/>
                </ScrollView>
        );
    }
}
  

export default PartyList;