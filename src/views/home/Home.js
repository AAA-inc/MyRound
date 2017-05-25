import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Home extends Component {
    render () {
        return (
            <View>
                <Text style={{ marginTop: 50 }}>Home!!!</Text>
            </View>
        );
    }
}

Home.propTypes = {
    navigation: PropTypes.object
};

export default Home;
