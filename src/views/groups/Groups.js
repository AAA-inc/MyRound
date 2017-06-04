import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Button from '../../common/Button';

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 22,
        color: '#000'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'blue'
    },
    buttonStyle: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
};

class Groups extends Component {
    static navigationOptions = {
        title: 'My Groups'
    }

    render () {
        return (
            <View>
                <View style={styles.buttonsContainer}>
                    <Button
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonText}
                        onPress={() => this.props.navigation.navigate('Create')}
                    >
                        Create
                    </Button>
                    <Button
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonText}
                        onPress={() => this.props.navigation.navigate('Join')}
                    >
                        Join
                    </Button>
                </View>
                <View style={{ marginTop: 50 }}>
                    <Text style={styles.textStyle}>You don't have any groups yet.</Text>
                    <Text style={styles.textStyle}>Join or Create one!</Text>
                </View>

            </View>
        );
    }
}

Groups.propTypes = {
    navigation: PropTypes.object
};

export default Groups;
