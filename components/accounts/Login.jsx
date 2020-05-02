import Grudr from '@grudr';
import Link from 'next/link';

// import initfirebase from '@credentials/client';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase/app';
// import  firebaseui from 'firebaseui';
import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class Login extends Component {

  // Configure FirebaseUI.
  // uiConfig = {
  //   // Popup signin flow rather than redirect flow.
  //   signInFlow: 'popup',
  //   // We will display Google and Facebook as auth providers.
  //   signInOptions: [
  //     {
  //       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //       requireDisplayName: false,
  //     },
  //     // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     // firebase.auth.FacebookAuthProvider.PROVIDER_ID
  //   ],
  //   signInSuccessUrl: '/',
  //   credentialHelper: 'none',
  //   callbacks: {
  //     // Avoid redirects after sign-in.
  //     signInSuccessWithAuthResult: () => false
  //   }
  // };

 render() {
    // Initialize the FirebaseUI Widget using Firebase.
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start('#grudrAuth__wrapper', {
    //   signInOptions: [
    //     firebase.auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
    //     firebase.auth.EmailAuthProvider.PROVIDER_ID // Other providers don't need to be given as object.
    //   ]
    // });
    
    return (
      <Card className="shadow-lg">
        <Card.Header className="p-5">
          <div className="text-muted text-center mb-3">
            <small>Login with credentials</small>
          </div>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" block>
              Login
            </Button>
            <Link href="/forgot-password">
              <a className="d-block mt-3"><small>Forgot your password?</small></a>
            </Link>
            <Link href="/register">
              <a className="d-block mt-1"><small>Don't have an account? Register</small></a>
            </Link>
          </Form>
        </Card.Header>
        <Card.Body className="text-center pt-4 pb-5">
          <div className="text-muted text-center mb-3">
            <small>or Login with</small>
          </div>
          <Button variant="white">
            Facebook
          </Button>
          <Button variant="white">
            Google
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

Grudr.registerComponent('Login', Login);
