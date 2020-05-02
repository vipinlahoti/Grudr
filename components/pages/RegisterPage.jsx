import Grudr from 'meteor/grudr:lib';
import { AccountsReactComponent } from 'meteor/grudr:accounts'

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const RegisterPage = () =>
  <React.Fragment>
    <div className="login__wrapper">
      <Container>
        <Row>
          <div className="accounts-card">
            <div className="accounts-card-banner"></div>
            <AccountsReactComponent state='signUp'/>
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Grudr.registerComponent('RegisterPage', RegisterPage);
