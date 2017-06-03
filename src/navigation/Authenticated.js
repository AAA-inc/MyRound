import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Profile from '../views/profile/Profile';
import GroupStack from './GroupStack';

export const Authenticated = TabNavigator({
    Home: {
        screen: GroupStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: () => (
                <Text>H</Text>
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
                <Text>P</Text>
            )
        }
    }
});
