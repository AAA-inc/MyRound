import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Add extends Component {
    render () {
        return (
            <View>
                <Text>Add!!!</Text>
            </View>
        );
    }
}

Add.propTypes = {
    navigation: PropTypes.object
};

export default Add;
