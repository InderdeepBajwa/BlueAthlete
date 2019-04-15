import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import * as ROUTES from '../../constants/routes';

const Landing = () => (
    <section class="home-header">
        <h1>Welcome to BlueAthlete</h1>
        <Link to={ROUTES.SIGN_IN}><button class="big-button">Signin</button></Link>
    </section>
);

export default Landing;
