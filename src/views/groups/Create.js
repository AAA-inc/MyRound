import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    input: {
        padding: 10,
        color: 'black',
        height: 40
    }
});

class Create extends Component {
    static navigationOptions = {
        title: 'Create'
    };
    render () {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Create!!!</Text>
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    placeholder='Title of your group'
                />
                <Button onPress={() => navigate('GroupDetail')} title="Create" />
            </View>
        );
    }
}

Create.propTypes = {
    navigation: PropTypes.object
};

export default Create;
