import Grudr from '@grudr';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const LoginPage = () =>
  <React.Fragment>
    
    <div className="login__wrapper">
      <Container>
        <Row>
          <div className="accounts-card">
            <div className="accounts-card-banner"></div>
            Login Form
          </div>
        </Row>
      </Container>
    </div>
  </React.Fragment>

Grudr.registerComponent('LoginPage', LoginPage);
