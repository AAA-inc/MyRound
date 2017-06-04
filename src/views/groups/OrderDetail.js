import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class OrderDetail extends Component {
    static navigationOptions = {
        title: 'Menu',
        headerLeft: null
    };
    render () {
        return (
            <View>
                <Text>Menu</Text>
            </View>
        );
    }
}

OrderDetail.propTypes = {
    navigation: PropTypes.object
};

export default OrderDetail;
