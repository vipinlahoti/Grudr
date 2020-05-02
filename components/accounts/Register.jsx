import Grudr from '@grudr';
import Link from 'next/link';
import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class Register extends Component {
 render() {
    return (
      <Card className="shadow-lg">
        <Card.Header className="p-5">
          <div className="text-muted text-center mb-3">
            <small>Create your account with us</small>
          </div>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" block>
              Register
            </Button>
            <Link href="/login">
              <a className="d-block mt-3"><small>Already have an account? Sign in!</small></a>
            </Link>
          </Form>
        </Card.Header>

        <Card.Body className="text-center pt-4 pb-5">
          <div className="text-muted text-center mb-3">
            <small>or Register with</small>
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

Grudr.registerComponent('Register', Register);
