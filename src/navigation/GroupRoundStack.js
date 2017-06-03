import { TabNavigator } from 'react-navigation';
import GroupDetail from '../views/groups/GroupDetail';
import OrderDetail from '../views/groups/OrderDetail';
import OrderSummary from '../views/groups/OrderSummary';

const GroupRoundStack = TabNavigator({
    GroupDetail: {
        screen: GroupDetail
    },
    OrderDetail: {
        screen: OrderDetail
    },
    OrderSummary: {
        screen: OrderSummary
    }
});

export default GroupRoundStack;
