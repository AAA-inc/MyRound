import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text } from 'react-native';
import { onSignIn } from './auth';

export default function SignUp ({ navigation }) {
    return (
        <View style={{ paddingVertical: 20 }}>
            <Text>Welcome to MyRound</Text>
            <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor='transparent'
                textStyle={{ color: '#bcbec1' }}
                title='Sign In'
                onPress={() => {
                    onSignIn().then(() => navigation.navigate('Authenticated')); // NEW LOGIC
                }}
            />
            <Text>Don't have a account yet?</Text>
            <Text>Join us!</Text>
            <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor='transparent'
                textStyle={{ color: '#bcbec1' }}
                title='Sign In'
                onPress={() => navigation.navigate('SignIn')}
            />
        </View>
    );
}

SignUp.propTypes = {
    navigation: PropTypes.object.isRequired
};
