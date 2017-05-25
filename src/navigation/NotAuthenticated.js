import { StackNavigator } from 'react-navigation';
import SignIn from '../views/auth/SignIn';

export const NotAuthenticated = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    }
});
