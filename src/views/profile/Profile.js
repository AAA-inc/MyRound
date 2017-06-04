import React, { Component } from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { onSignOut} from '../auth/auth';

class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <Button onPress={() => navigate('Rounds')} title="My Rounds" />
                <Button
                    backgroundColor="#03A9F4"
                    title="Logout"
                    onPress={() => onSignOut().then(() => navigate('NotAuthenticated'))}
                />
            </View>
        );
    }
}


Profile.propTypes = {
    navigation: PropTypes.object
};

export default Profile;
