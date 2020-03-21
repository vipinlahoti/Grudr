import React from 'react';
import { Components, registerComponent, getSetting } from 'meteor/vulcan:core';
import { FormattedMessage } from 'meteor/vulcan:i18n';

import { Container, Row, Col } from 'react-bootstrap';

const tagline = getSetting('tagline');

const HeroComponent = () => {
  return (
    <div className="section section-hero">
      <Container>
        <Row>
          <Col sm={12} md={7} lg={7}>

            {tagline ? 
              <h4 className="display-4">{tagline} <br /><span className="text-primary">Publishing industries for previewing layouts and visual mockups</span>  </h4>
            : ''}

            {/*
            <div className="mt-4">
              <Components.Button variant="primary" type="link" path="/register" iconButton="person_add">
                <FormattedMessage id="user.register"/>
              </Components.Button>

              <Components.Button variant="white" type="link" path="/login" iconButton="account" text="user.login">
                <FormattedMessage id="user.login"/>
              </Components.Button>
            </div>
          */}
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}

registerComponent('HeroComponent', HeroComponent);
