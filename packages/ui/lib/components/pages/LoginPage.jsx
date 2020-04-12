import Grudr from 'meteor/grudr:core';
import { AccountsReactComponent } from 'meteor/grudr:accounts'

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LoginPage = () =>
  <React.Fragment>
    <div className="section-diagonal"></div>
    <div className="login__wrapper">
      <Container>
        <Row>
          <div className="accounts-card">
            <div className="accounts-card-banner"></div>
            <AccountsReactComponent state='signIn'/>
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Grudr.registerComponent('LoginPage', LoginPage);
