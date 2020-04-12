import Grudr from 'meteor/grudr:core';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LoginPage = () =>
  <React.Fragment>
    <div className="section-diagonal"></div>
    <div className="section-hero login__wrapper">
      <Container>
        <Row className="justify-content-md-center align-items-center h-100">
          <Col sm={12} md={4} lg={4}>
            Login Form
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Grudr.registerComponent('LoginPage', LoginPage);
