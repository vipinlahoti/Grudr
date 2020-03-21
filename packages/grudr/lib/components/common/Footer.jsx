import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
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
);

Footer.displayName = 'Footer';

registerComponent({ name: 'Footer', component: Footer });
