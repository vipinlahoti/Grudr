import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

import { Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {
  const headerBg = {
    background: `url(//s3.amazonaws.com/creativetim_bucket/products/56/cover_nuk_regular.jpg) no-repeat 50% center / cover`
  }
  return (
    <React.Fragment>
      <Components.HeroComponent />
      <Components.FeaturesBlock />

      <div className="section">
        <Container>
          <Row>
            <Col sm={12} md={5} lg={5}>
              <h4 className="display-3">Lorem ipsum dolor <span className="text-primary">sit amet, consectetur adipiscing elit.</span></h4>
              <p className="lead">uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>

            <Col sm={12} md={7} lg={7}></Col>
          </Row>
        </Container>
      </div>

      <div className="section">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}></Col>
            <Col sm={12} md={5} lg={5}>
              <h4 className="display-3">Lorem ipsum dolor <span className="text-danger">sit amet, consectetur adipiscing elit.</span></h4>
              <p className="lead">uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

registerComponent('HomePage', HomePage);
