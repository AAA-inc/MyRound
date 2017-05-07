import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Success extends Component {
    static navigationOptions = {
        title: 'Success'
    };
    render () {
        return (
            <View>
                <Text>Congrats</Text>
                <Text>Your group has been created!</Text>
                <Text>Tell your friends the name of the group!</Text>
            </View>
        );
    }
}

Success.propTypes = {
    navigation: PropTypes.object
};

export default Success;
