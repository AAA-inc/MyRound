import { TabNavigator } from 'react-navigation';
import Landing from '../views/landing/Landing';
import MainStack from './MainStack';

const Root = TabNavigator({
    Landing: { screen: Landing },
    Main: { screen: MainStack }
}, {
    navigationOptions: {
        tabBarVisible: false
    }
});

export default Root;
