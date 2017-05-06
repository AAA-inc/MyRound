import { StackNavigator } from 'react-navigation';
import Groups from '../views/groups/Groups';
import Success from '../views/groups/Success';

const GroupStack = StackNavigator({
    Group: {
        screen: Groups
    },
    Success: {
        screen: Success
    }
});

export default GroupStack;
