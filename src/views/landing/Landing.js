import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class Landing extends Component {
    render () {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Landing!!!</Text>
                <Button onPress={() => navigate('Main')} title="Facebook" />
            </View>
        );
    }
}

Landing.propTypes = {
    navigation: PropTypes.object
};

export default Landing;
