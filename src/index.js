import React, { Component } from 'react';
import { isAuthenticated } from './views/auth/auth';
import { createRootNavigator } from './navigation';

class MyRound extends Component {

    constructor (props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false
        };
    }

    componentWillMount () {
        isAuthenticated()
            .then((res) => this.setState({ signedIn: res, checkedSignIn: true}))
            .catch((err) => console.log('error', err));
    }

    render () {
        const { checkedSignIn, signedIn } = this.state;
        if (!checkedSignIn) {
            return null;
        }

        const Layout = createRootNavigator(signedIn);
        return <Layout />;
    }
}

export default MyRound;
