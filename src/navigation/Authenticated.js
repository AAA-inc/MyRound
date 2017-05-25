/* eslint-disable react/display-name */
import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from '../views/home/Home';
import Profile from '../views/profile/Profile';

export const Authenticated = TabNavigator({
    Home: {
        screen: Home,
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
