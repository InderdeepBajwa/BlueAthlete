//Signin/index.js
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';

import {
    Grid,
    Form,
    Button,
    Header,
    Icon,
    Message,
    Divider,
  } from 'semantic-ui-react';

//This is needed to auth with the firebase
const config = {
    apiKey: "AIzaSyAsBEyifElIz53n6J_SgwuW4jzc6IBtwLQ",
    authDomain: "blueathlete-d1904.firebaseapp.com",
    databaseURL: "https://blueathlete-d1904.firebaseio.com",
    projectId: "blueathlete-d1904",
    storageBucket: "blueathlete-d1904.appspot.com",
    messagingSenderId: "802929808431"
  };

  const SignIn = () => (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
        Project Blue Athlete
        </Header>
        <
        <SignInForm />
      </Grid.Column>
    </Grid>
  );

  const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };
  

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
    
  };

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
      }
    
      onSubmit = event => {
        const { email, password } = this.state;
    
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
    
        event.preventDefault();
      };
    
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    


      render() {
        const { email, password, error } = this.state;
    
        const isInvalid = password === '' || email === '';
    
        return (


        
        <p class="divStyle">
          <div>
            <Divider horizontal>Signin</Divider>
            {error && (
              <Message negative>
                <p>{error.message}</p>
              </Message>
            )}
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <label>Email</label>
                <input
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Email Address"
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Field>
              <Button primary disabled={isInvalid} type="submit">
                Submit
              </Button>
              {//<PasswordForgetLink />
              }
            </Form>
          </div></p>
        );
      }
      }



export default SignIn;
export {SignInForm}