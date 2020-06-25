import React, { Component } from 'react'
import { Platform, StyleSheet, View, ScrollView, RefreshControl, SafeAreaView } from 'react-native';
import { withTheme } from 'react-native-paper';
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
            refreshing: false
        };

    }


    _onRefreshStart = () => {
        this.setState({refreshing: true });
        wait(2000).then(() => {
            var { List } = this.state;
            this.setState({
                List,
                refreshing: false
            });
        });
    }

    _onRefreshStop = () => {
        this.setState({refreshing: false });
    }

    render() {
        var { refreshing } = this.state;
        var { List, onRefresh } = this.props;
        const { colors } = this.props.theme;
        return (
            <SafeAreaView>
                <ScrollView
                    style={{ backgroundColor: colors.surface  }}
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
                    <Party/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
  

export default withTheme(PartyList);