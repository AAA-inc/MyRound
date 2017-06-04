import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ProfileStack from './ProfileStack';
import GroupStack from './GroupStack';

export const Authenticated = TabNavigator({
    Home: {
        screen: GroupStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: () => ( // eslint-disable-line
                <Text>H</Text>
            )
        }
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => ( // eslint-disable-line
                <Text>P</Text>
            )
        }
    }
});
