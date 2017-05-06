import { StackNavigator, TabNavigator } from 'react-navigation';
import Profile from '../views/profile/Profile';
import Add from '../views/groups/Add';
import Create from '../views/groups/Create';
import GroupStack from './GroupStack';
import RoundStack from './RoundStack';

const MainStack = TabNavigator({
    Me: {
    	screen: StackNavigator({
    		Profile: { screen: Profile },
    		Groups: { screen: GroupStack },
    		Rounds: { screen: RoundStack }
    	})
    },
    Create: {
    	screen: Create
    },
    AddMe: {
    	screen: Add
    }
}, {
    navigationOptions: {
        tabBarVisible: true
    }
});

export default MainStack;
