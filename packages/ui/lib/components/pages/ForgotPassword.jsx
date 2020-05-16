import Grudr from 'meteor/grudr:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const ForgotPassword = () =>
  <React.Fragment>
    <Grudr.components.HeadTags title="Forgot Password Page" description="Forgot Password Page" />

    <div className="section">
      <Container>
        <Row>
          <div className="accounts-card">
            <Card className="shadow-lg">
              <Card.Header>
                <div className="title-5 mb-2">
                  Reset Password
                </div>
                <Form>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Grudr.components.Button variant="black" block>Login</Grudr.components.Button>
                  
                  <p className="mt-1">Don't have an account? <Link to={{ pathname: '/register' }}>Register Now</Link>.</p>

                </Form>
              </Card.Header>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Grudr.registerComponent('ForgotPassword', ForgotPassword);
