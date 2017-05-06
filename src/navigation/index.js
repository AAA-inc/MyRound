import { TabNavigator } from 'react-navigation';
import Landing from '../views/landing/Landing';
import Profile from '../views/profile/Profile';

const Root = TabNavigator({
  Landing: { screen: Landing },
  Profile: { screen: Profile }
}, {
  navigationOptions: {
    tabBarVisible: false
  }
});

export default Root;
