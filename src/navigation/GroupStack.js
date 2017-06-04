import { StackNavigator } from 'react-navigation';
import Groups from '../views/groups/Groups';
import Create from '../views/groups/Create';
import Join from '../views/groups/Join';
import GroupRoundStack from './GroupRoundStack';

const GroupStack = StackNavigator({
    Group: {
        screen: StackNavigator({
            Group: { screen: Groups },
            GroupDetail: {
                screen: GroupRoundStack,
                navigationOptions: {
        	        tabBarVisible: false
        	    }
            }
        })
    },
    Create: {
        screen: Create,
        navigationOptions: {
            header: null,
	        tabBarVisible: false
	    }
    },
    Join: {
        screen: Join,
        navigationOptions: {
	        tabBarVisible: false
	    }
    }
}, {
    headerMode: 'none'
});

export default GroupStack;
