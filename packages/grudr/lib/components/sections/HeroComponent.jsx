import React from 'react';
import { Components, registerComponent, getSetting } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import { Container, Row, Col } from 'react-bootstrap';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title', 'Grudr');
const tagline = getSetting('tagline');

const HeroComponent = () => {
  return (
    <div className="section section-hero">
      <Container fluid>
        <Row>
          <Col sm={12} md={7} lg={6} className="ml-5">
            <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />

            {tagline ? 
              <div className="lead">{tagline} <br /><strong>Publishing industries for previewing layouts and visual mockups</strong>  </div>
            : ''}

            <div className="mt-5">
              <Components.Button variant="primary">
                <Components.Icon name="person_add"/>
                <FormattedMessage id="user.signup"/>
              </Components.Button>

              <Components.Button variant="light">
                <Components.Icon name="account"/>
                <FormattedMessage id="user.signin"/>
              </Components.Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

registerComponent('HeroComponent', HeroComponent);
