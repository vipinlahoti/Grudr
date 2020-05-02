import Grudr from '@grudr';
import Head from 'next/head';
import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

export default () => {

  return (
    <Grudr.components.Layout>
      <Grudr.components.HeadTags title="Home" description="Home description" />

      <Jumbotron className="section-hero">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <h4 className="display-4">An agile suite that’s designed for change.</h4>
              <p>Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world.</p>
              <div className="mt-4">
                <Grudr.components.Button variant="white" type="link" path="/register" icon="person_add">
                  Register
                </Grudr.components.Button>
                <Grudr.components.Button variant="white" type="link" path="/login" icon="account">
                  Login
                </Grudr.components.Button>
              </div>
            
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <div className="section section-features">
        <Container>
          <Row className="justify-content-md-center text-center mb-4">
            <Col sm={12} md={8} lg={8}>
              <h3 className="display-3">Excepteur sint occaecat cupidatat.</h3>
              <p className="lead">hero.description</p>
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
                    hero.description
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
                    hero.description
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
                    hero.description
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
              <p className="lead">hero.description</p>
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
              <p className="lead">hero.description</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Grudr.components.Layout>
  )
}
