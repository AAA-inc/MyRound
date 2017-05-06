import { StackNavigator } from 'react-navigation';
import Groups from '../views/groups/Groups';

const GroupStack = StackNavigator({
    Group: {
        screen: Groups
    }
});

export default GroupStack;
