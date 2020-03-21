import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { Container, Row, Col } from 'react-bootstrap';

const LoginPage = () =>
<div className="login__wrapper">
  <Row className="h-100 justify-content-md-center align-items-center h-100">
    <Col xs={6}>
      <h3 className="h3">Register to Grudr</h3>
      <Components.AccountsLoginForm />
    </Col>
  </Row>
</div>

registerComponent('LoginPage', LoginPage);
