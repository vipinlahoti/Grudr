import Grudr from 'meteor/grudr:lib';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Error404 = () =>
  <div className="section">
    <Container>
      <Row>
        <Col sm={12} md={5} lg={5}>
          <h4 className="display-3">Error 404</h4>
        </Col>

        <Col sm={12} md={7} lg={7}></Col>
      </Row>
    </Container>
  </div>

Grudr.registerComponent('Error404', Error404);
