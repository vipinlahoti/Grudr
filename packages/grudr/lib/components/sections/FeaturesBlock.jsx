import React from 'react';
import { Components, registerComponent, getSetting } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import { Container, Row, Col, Card } from 'react-bootstrap';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title', 'Grudr');
const tagline = getSetting('tagline');

const FeaturesBlock = () => {
  return (
    <div className="section section-features">
      <Container>
        <Row className="justify-content-md-center text-center mb-4">
          <Col sm={12} md={8} lg={8}>
            <h3 className="display-3">Excepteur sint occaecat cupidatat.</h3>
            <p className="lead">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon rounded-circle bg-primary text-white">
                  <Components.Icon name="person_add"/>
                </div>
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon rounded-circle bg-warning text-white">
                  <Components.Icon name="account"/>
                </div>
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon rounded-circle bg-dark text-white">
                  <Components.Icon name="person_add"/>
                </div>
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

registerComponent('FeaturesBlock', FeaturesBlock);
