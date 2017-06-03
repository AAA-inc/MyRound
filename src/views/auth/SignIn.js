import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';
import { onSignIn } from './auth';

export default function SignIn ({ navigation }) {
    return (
        <View>
            <Text style={{ marginTop: 50 }}>Welcome to MyRound</Text>
            <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor='transparent'
                textStyle={{ color: '#bcbec1' }}
                title='FACEBOOK SIGN IN BUTTON'
                onPress={() => {
                    onSignIn().then(() => navigation.navigate('Authenticated'));
                }}
            />
        </View>
    );
}

SignIn.propTypes = {
    navigation: PropTypes.object.isRequired
};
