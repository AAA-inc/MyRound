import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class Groups extends Component {
    render () {
        return (
            <View>
                <View>
                    <Button
                      onPress={() => this.props.navigation.navigate('Create')}
                      title="Create"
                    />
                    <Button
                      onPress={() => this.props.navigation.navigate('Join')}
                      title="Join"
                    />
                </View>
                <Text style={{ marginTop: 50 }}>Groups!!!</Text>
            </View>
        );
    }
}

Groups.propTypes = {
    navigation: PropTypes.object
};

export default Groups;
