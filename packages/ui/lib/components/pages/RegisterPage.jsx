import Grudr from 'meteor/grudr:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const RegisterPage = () =>
  <React.Fragment>
    <Grudr.components.HeadTags title="Register Page" description="Register Page" />

    <div className="section">
      <Container>
        <Row>
          <div className="accounts-card">
            <Card className="shadow-lg">
              <Card.Header>

                <div className="title-5 mb-2">
                  Create an Account
                </div>

                <Form>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  
                  <Grudr.components.Button variant="black" block>
                    Register
                  </Grudr.components.Button>

                  <p className="mt-1">Already have an account? <Link to={{ pathname: '/login' }}>Sign In</Link>.</p>
                </Form>
              </Card.Header>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Grudr.registerComponent('RegisterPage', RegisterPage);
