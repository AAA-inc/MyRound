import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Create extends Component {
    render () {
        return (
            <View>
                <Text>Create!!!</Text>
            </View>
        );
    }
}

Create.propTypes = {
    navigation: PropTypes.object
};

export default Create;
