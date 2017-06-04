import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class GroupDetail extends Component {
    static navigationOptions = {
        title: 'GroupDetail'
    };
    inviteHandler () {
        console.log('inviteHandler');
    }
    render () {
        return (
            <View>
                <Text>Members:</Text>
                <Text>Anita</Text>
                <Text>Akhil</Text>
                <Text>Anni</Text>

                <Button
                  onPress={this.inviteHandler}
                  title="Invite Friends"
                />
            </View>
        );
    }
}

GroupDetail.propTypes = {
    navigation: PropTypes.object
};

export default GroupDetail;
