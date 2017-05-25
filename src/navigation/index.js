import { StackNavigator } from 'react-navigation';
import { Authenticated } from './Authenticated';
import { NotAuthenticated } from './NotAuthenticated';

export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
        {
            Authenticated: {
                screen: Authenticated,
                navigationOptions: {
                    gesturesEnabled: false
                }
            },
            NotAuthenticated: {
                screen: NotAuthenticated,
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        },
        {
            headerMode: 'none',
            mode: 'modal',
            initialRouteName: signedIn ? 'Authenticated' : 'NotAuthenticated'
        }
    );
};
