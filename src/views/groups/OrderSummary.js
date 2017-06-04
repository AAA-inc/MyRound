import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class OrderSummary extends Component {
    static navigationOptions = {
        title: 'My Round',
        headerLeft: null
    };
    roundStartHandler () {
        console.log('roundStartHandler');
    }
    roundEndHandler () {
        console.log('roundEndHandler');
    }
    render () {
        return (
            <View>
                <Text>OrderSummary</Text>

                <Button
                  onPress={this.roundStartHandler}
                  title="Start round"
                />

                <Text>Beer</Text>
                <Text>Beer</Text>
                <Text>Beer</Text>
                <Text>Beer</Text>
                <Text>Wine</Text>
                <Text>Wine</Text>

                <Text>Anitas order is missing -> nudge her</Text>

                <Button
                  onPress={this.roundEndHandler}
                  title="Close round"
                />
            </View>
        );
    }
}

OrderSummary.propTypes = {
    navigation: PropTypes.object
};

export default OrderSummary;
