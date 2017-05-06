import { StackNavigator } from 'react-navigation';
import Round from '../views/round/Round';

const RoundStack = StackNavigator({
    Round: {
        screen: Round
    }
});

export default RoundStack;
