import { StackNavigator } from 'react-navigation';
import Profile from '../views/profile/Profile';

const ProfileStack = StackNavigator({
    Profile: {
        screen: Profile
    }
});

export default ProfileStack;
