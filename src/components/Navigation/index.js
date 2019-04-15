import React from 'react';
import { Link } from 'react-router-dom';

// CSS import
import './style.css';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <AuthUserContext.Consumer>
        <div>{authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </div>
    </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
    <ul className="nav">
        <li>
            <Link to={ROUTES.LANDING}>BlueAthlete</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul className="nav">
        <li>
            <Link to={ROUTES.LANDING}>BlueAthlete</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;
