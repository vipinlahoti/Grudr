import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Grudr from '/imports/modules/core/config';

const HomePage = () => {
  return (
    <React.Fragment>
      <Grudr.components.HeadTags title="Home" description="Home description" />

      <div className="section section-hero">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>

              <h4 className="display-4">Publishing industries for previewing layouts and visual mockups</h4>
              
              {/*
              <div className="mt-4">
                <Grudr.components.Button variant="primary" type="link" path="/register" iconButton="person_add">
                  <FormattedMessage id="user.register"/>
                </Grudr.components.Button>

                <Grudr.components.Button variant="white" type="link" path="/login" iconButton="account" text="user.login">
                  <FormattedMessage id="user.login"/>
                </Grudr.components.Button>
              </div>
            */}
            
            </Col>
          </Row>
        </Container>
      </div>

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
                  <Grudr.components.Icon name="person_add"/>
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
                  <Grudr.components.Icon name="account"/>
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
                  <Grudr.components.Icon name="person_add"/>
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

      <div className="section">
        <Container>
          <Row>
            <Col sm={12} md={5} lg={5}>
              <h4 className="display-3">HomePage dolor <span className="text-primary">sit amet, consectetur adipiscing elit.</span></h4>
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

module.exports = HomePage;
