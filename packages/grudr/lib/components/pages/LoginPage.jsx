import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LoginPage = () =>
  <React.Fragment>
    <div className="section-diagonal"></div>
    <div className="section-hero login__wrapper">
      <Container>
        <Row className="justify-content-md-center align-items-center h-100">
          <Col sm={12} md={4} lg={4}>
            <Components.AccountsLoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>

registerComponent('LoginPage', LoginPage);
