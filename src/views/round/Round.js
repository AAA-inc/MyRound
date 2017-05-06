import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Round extends Component {
    render () {
        return (
            <View>
                <Text>Round!!!</Text>
            </View>
        );
    }
}

Round.propTypes = {
    navigation: PropTypes.object
};

export default Round;
