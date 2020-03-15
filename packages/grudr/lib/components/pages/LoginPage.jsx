import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

import { Container, Row, Col } from 'react-bootstrap';

const LoginPage = () =>
<div className="login__wrapper">
  <Row className="h-100">
    <Col xs={8} className="bg-light">
      <Row className="justify-content-md-center align-items-center h-100">
        <Col xs={6}>
          <h3 className="h3">Login to Grudr</h3>
          <Components.AccountsLoginForm />
        </Col>
      </Row>
    </Col>
    <Col className="bg-primary">
    </Col>
  </Row>
</div>

registerComponent('LoginPage', LoginPage);
