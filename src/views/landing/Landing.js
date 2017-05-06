import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

class Landing extends Component {
    render () {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Landing!!!</Text>
                <Button onPress={() => navigate('Profile')} title="Facebook" />
            </View>
        );
    }
}

Landing.propTypes = {
    navigation: PropTypes.object
};

export default Landing;
