import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import GroupDetail from '../views/groups/GroupDetail';
import OrderDetail from '../views/groups/OrderDetail';
import OrderSummary from '../views/groups/OrderSummary';

const GroupRoundStack = TabNavigator({
    GroupDetail: {
        screen: GroupDetail,
        navigationOptions: {
            tabBarLabel: 'Title',
            tabBarIcon: () => ( // eslint-disable-line
                <Text>T</Text>
            )
        }
    },
    OrderDetail: {
        screen: OrderDetail,
        navigationOptions: {
            tabBarLabel: 'Menu',
            tabBarIcon: () => ( // eslint-disable-line
                <Text>M</Text>
            )
        }
    },
    OrderSummary: {
        screen: OrderSummary,
        navigationOptions: {
            tabBarLabel: 'Summary',
            tabBarIcon: () => ( // eslint-disable-line
                <Text>S</Text>
            )
        }
    }
});

export default GroupRoundStack;
