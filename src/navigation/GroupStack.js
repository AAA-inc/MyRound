import { StackNavigator } from 'react-navigation';
import Groups from '../views/groups/Groups';
import Create from '../views/groups/Create';
import Join from '../views/groups/Join';
import GroupRoundStack from './GroupRoundStack';

const GroupStack = StackNavigator({
    Group: {
        screen: Groups
    },
    Create: {
        screen: Create,
        navigationOptions: {
	        tabBarVisible: false
	    }
    },
    GroupDetail: {
        screen: GroupRoundStack,
        navigationOptions: {
	        tabBarVisible: false
	    }
    },
    Join: {
        screen: Join,
        navigationOptions: {
	        tabBarVisible: false
	    }
    }
});

export default GroupStack;
