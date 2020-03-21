import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';
import { STATES } from 'meteor/vulcan:accounts';

import { Container, Row, Col } from 'react-bootstrap';

const RegisterPage = () =>
  <React.Fragment>
    <div className="section-diagonal"></div>
    <div className="section-hero login__wrapper">
      <Container>
        <Row className="justify-content-md-center align-items-center h-100">
          <Col sm={12} md={4} lg={4}>
            <Components.AccountsLoginForm formState={STATES.SIGN_UP} />
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>

registerComponent('RegisterPage', RegisterPage);
