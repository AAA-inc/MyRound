import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import Button from '../../common/Button';

const styles = {
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        color: 'black',
        height: 40,
        borderWidth: 1,
        borderColor: '#000'
    },
    text: {
        marginTop: 50,
        alignSelf: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    textStyle: {
        color: '#fff',
        fontSize: 30,
        alignSelf: 'center'
    },
    buttonStyle: {
        backgroundColor: 'green'
    }
};

class Create extends Component {
    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Start a group!</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        placeholder='Title of your group'
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.textStyle}
                        onPress={() => navigate('GroupDetail')}
                    >
                        Create
                    </Button>
                </View>
            </View>
        );
    }
}

Create.propTypes = {
    navigation: PropTypes.object
};

export default Create;
