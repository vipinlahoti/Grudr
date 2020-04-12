import Grudr from 'meteor/grudr:core';

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <React.Fragment>
      <Grudr.components.HeadTags title="Home" description="Home description" />

      <div className="section section-hero">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>

              <h4 className="display-4"><FormattedMessage id="hero.description"/></h4>

              <div className="mt-4">
                <Grudr.components.Button variant="primary" type="link" path="/register" icon="person_add">
                  <FormattedMessage id="accounts.register"/>
                </Grudr.components.Button>
                <Grudr.components.Button variant="white" type="link" path="/login" icon="account">
                  <FormattedMessage id="accounts.login"/>
                </Grudr.components.Button>
              </div>
            
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section section-features">
      <Container>
        <Row className="justify-content-md-center text-center mb-4">
          <Col sm={12} md={8} lg={8}>
            <h3 className="display-3">Excepteur sint occaecat cupidatat.</h3>
            <p className="lead"><FormattedMessage id="hero.description"/></p>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon rounded-circle bg-primary text-white">
                  <Grudr.components.Icon name="person_add"/>
                </div>
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>
                  <FormattedMessage id="hero.description"/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon rounded-circle bg-warning text-white">
                  <Grudr.components.Icon name="account"/>
                </div>
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>
                  <FormattedMessage id="hero.description"/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <Card className="featured-card">
              <Card.Body>
                <div className="card-icon rounded-circle bg-dark text-white">
                  <Grudr.components.Icon name="person_add"/>
                </div>
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>
                  <FormattedMessage id="hero.description"/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

      <div className="section">
        <Container>
          <Row>
            <Col sm={12} md={5} lg={5}>
              <h4 className="display-3">HomePage dolor <span className="text-primary">sit amet, consectetur adipiscing elit.</span></h4>
              <p className="lead"><FormattedMessage id="hero.description"/></p>
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
              <p className="lead"><FormattedMessage id="hero.description"/></p>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Grudr.registerComponent('HomePage', HomePage);
