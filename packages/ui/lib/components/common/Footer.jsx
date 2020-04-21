import Grudr from 'meteor/grudr:lib';

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () =>
  <footer className="section-small">
    <Container>
      <Row>
        <Col md={7}>
          <h4 className="mb-0 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <hr />
          <div className="copyright">&copy; 2020.</div>
        </Col>
        <Col md={5}>
          <Link to={{ pathname: '/register' }} className="nav-link">
            <FormattedMessage id="accounts.register"/>
          </Link>

          <Link to={{ pathname: '/login' }} className="nav-link">
            <FormattedMessage id="accounts.login"/>
          </Link>
        </Col>
      </Row>
    </Container>
  </footer>

Grudr.registerComponent('Footer', Footer);
