import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Groups extends Component {
    render () {
        return (
            <View>
                <Text>Groups!!!</Text>
            </View>
        );
    }
}

Groups.propTypes = {
    navigation: PropTypes.object
};

export default Groups;
