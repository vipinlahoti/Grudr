import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Grudr from '/imports/modules/core/config';

const Footer = () =>
  <footer className="section-small bg-light">
    <Container>
      <Row>
        <Col sm={12}>
          <h4 className="mb-0 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <hr />
          <div className="copyright">&copy; 2020.</div>
        </Col>
      </Row>
    </Container>
  </footer>

module.exports = Footer;
// Grudr.registerComponent('Footer', Footer);
