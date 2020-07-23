import React, { Component } from 'react'
import { Platform, StyleSheet, View, ScrollView, RefreshControl, SafeAreaView } from 'react-native';
import { withTheme } from 'react-native-paper';
import Party from './party';

import { connect } from 'react-redux';

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
            refreshing: false
        };

    }


    _onRefreshStart = () => {
        this.setState({refreshing: true });
        wait(2000).then(() => {
            this.setState({
                refreshing: false
            });
        });
    }

    _onRefreshStop = () => {
        this.setState({refreshing: false });
    }

    render() {
        var { refreshing } = this.state;
        var { List, onRefresh, Key, children } = this.props;
        var _List = List[Key];
        const { colors } = this.props.theme;
        return (
            <SafeAreaView>
                <ScrollView
                    style={{ backgroundColor: colors.background  }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => {
                                this._onRefreshStart();
                                onRefresh(this._onRefreshStop);
                            }}
                            colors={[colors.primary]}
                            progressBackgroundColor={colors.surface}
                        />
                    }
                >
                    {children}
                    <Party List={_List} Key={Key}/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
  

export default withTheme(
    connect(state => ({
        userInterface: state.userInterface,
        partyList: state.partyList,
    }), { } )(PartyList));