import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Dimensions } from 'react-native';
import { onSignIn } from './auth';
import Slides from './Slides';

const height = Dimensions.get('window').height;

const SLIDE_DATA = [
    { text: 'Welcome to My Round', color: 'pink' },
    { text: 'Strapline Text 2', color: '#009688' },
    { text: 'Strapline Text 3', color: '#03A9F4' }
];

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    buttonsWrapper: {
        flexDirection: 'row'
    }
};

export default function SignIn ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ height }}>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
                <Button
                    buttonStyle={{ marginTop: 20, width: 200 }}
                    backgroundColor='blue'
                    textStyle={{ color: '#fff' }}
                    title='FACEBOOK'
                    onPress={() => {
                        onSignIn().then(() => navigation.navigate('Authenticated'));
                    }}
                />
            </View>
        </View>
    );
}

SignIn.propTypes = {
    navigation: PropTypes.object.isRequired
};
