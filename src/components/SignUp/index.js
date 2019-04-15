import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

// Initializing signup variables
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

const SignUpPage = () => (
    <div class="centerIt">
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        // Mimiking initial state of no parameters into Signup state
        this.state = {...INITIAL_STATE};
    }

    // Import fields to capture Singup information
    onChange = event => {
        this.setState({ [event.target.name ]: event.target.value });
    };

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
            event.preventDefault();
    };

    // onChange = event => {

    // };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state; // Copies empty Signup state

        // Password validation
        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

        return (
            // TODO: Implement HTML form here
            <form onSubmit={this.onSubmit} class="signForm">
                <input
                    name="username"
                    defaultValue={username}
                    onChange={this.onChange}
                    type = "text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    defaultValue={email}
                    onChange={this.onChange}
                    type = "text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    defaultValue={passwordOne}
                    onChange={this.onChange}
                    type = "password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    defaultValue={passwordTwo}
                    onChange={this.onChange}
                    type = "password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit" class="big-button">Sign Up</button>

        {
            // Error handling
            error && <p>{error.message}</p>
        }
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
