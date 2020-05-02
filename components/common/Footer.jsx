import Grudr from '@grudr';
import React from 'react';
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

        </Col>
      </Row>
    </Container>
  </footer>

Grudr.registerComponent('Footer', Footer);
