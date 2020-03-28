import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Error404 = () =>
  <div className="section">
    <Container>
      <Row>
        <Col sm={12} md={5} lg={5}>
          <h4 className="display-3"><FormattedMessage id="pages.404"/></h4>
        </Col>

        <Col sm={12} md={7} lg={7}></Col>
      </Row>
    </Container>
  </div>

module.exports = Error404;
