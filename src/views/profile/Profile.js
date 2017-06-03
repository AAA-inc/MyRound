import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { onSignOut} from '../auth/auth';

class Profile extends Component {
    static navigationOptions = {
        title: 'Groups'
    };

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={{ marginTop: 20 }}>Profile</Text>
                <Button onPress={() => navigate('Groups')} title="Groups" />
                <Button onPress={() => navigate('Rounds')} title="Rounds" />
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
