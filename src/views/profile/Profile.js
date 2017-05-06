import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class Profile extends Component {
    static navigationOptions = {
      title: 'Groups'
  };
    render () {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Meeeee</Text>
                <Button onPress={() => navigate('Groups')} title="Groups" />
                <Button onPress={() => navigate('Rounds')} title="Rounds" />
            </View>
        );
    }
}


Profile.propTypes = {
    navigation: PropTypes.object
};

export default Profile;
