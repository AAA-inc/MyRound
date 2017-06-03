import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Join extends Component {
    render () {
        return (
            <View>
                <Text>Join!!!</Text>
            </View>
        );
    }
}

Join.propTypes = {
    navigation: PropTypes.object
};

export default Join;
