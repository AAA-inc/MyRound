import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import Button from '../../common/Button';

const styles = {
    input: {
        padding: 10,
        color: 'black',
        height: 40,
        borderWidth: 1,
        borderColor: '#000'
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
    static navigationOptions = {
        title: 'Create'
    };
    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    placeholder='Title of your group'
                />
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
