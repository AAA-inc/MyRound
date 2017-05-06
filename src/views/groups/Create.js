import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class Create extends Component {
    static navigationOptions = {
        title: 'Create'
    };

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Create!!!</Text>
                <Button onPress={() => navigate('Success')} title="Create" />
            </View>
        );
    }
}

Create.propTypes = {
    navigation: PropTypes.object
};

export default Create;
