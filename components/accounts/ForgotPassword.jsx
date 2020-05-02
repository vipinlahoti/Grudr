import Grudr from '@grudr';
import Link from 'next/link';
import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class ForgotPassword extends Component {
 render() {
    return (
      <Card className="shadow-lg">
        <Card.Header className="p-5">
          <div className="text-muted text-center mb-3">
            <small>Forgot Password</small>
          </div>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Button variant="primary" block>
              Send Reset Link
            </Button>
            <Link href="/login">
              <a className="d-block mt-3"><small>Already have an account? Sign in!</small></a>
            </Link>
          </Form>
        </Card.Header>
      </Card>
    )
  }
}

Grudr.registerComponent('ForgotPassword', ForgotPassword);
