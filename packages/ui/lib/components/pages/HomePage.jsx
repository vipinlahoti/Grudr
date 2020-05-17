import Grudr from 'meteor/grudr:lib';
import React from 'react';
import { Jumbotron, Container, Row, Col, Card, Form, ListGroup } from 'react-bootstrap';

const HomePage = () => {
  return (
    <React.Fragment>
      <Grudr.components.HeadTags title="Home" description="Home description" />

      <Jumbotron>
        <Container>
          <Row>
            <Col sm={12} md={10}>
              <h3 className="title-3">An agile suite that’s designed for change.</h3>
              <p className="lead">Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world.</p>
              
              <div className="mt-2">
                <Form inline>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" autoComplete="off" required />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" autoComplete="off" required />
                  </Form.Group>
                  <Grudr.components.Button variant="black-fill" type="submit">
                    Create an Account
                  </Grudr.components.Button>
                </Form>
                
              </div>
            
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Grudr.components.MiniFooter
        variant="bg-dark"
        className="center-xs"
        title="Get started with Skawe and find everything that you need to get online."
      />

      <div className="section bg-light">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-5">Cloud Instance</h5>
                  <p>Powerful compute instances with Intel CPUs and 100% SSD storage. </p>
                  <p className="mb-0">Starting at</p>
                  <div className="mb-1">
                    <span className="title-5 mr-1">₹99/mo</span>
                    <span className="title-5 list-price">₹299/mo</span>
                  </div>
                  <Grudr.components.Button type="link" variant="primary" path="/hosting" size="small">
                    Learn More
                  </Grudr.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-5">Block Storage</h5>
                  <p>Powerful compute instances with Intel CPUs and 100% SSD storage. </p>
                  <p className="mb-0">Starting at</p>
                  <div className="mb-1">
                    <span className="title-5 mr-1">₹99/mo</span>
                    <span className="title-5 list-price">₹299/mo</span>
                  </div>
                  <Grudr.components.Button type="link" variant="primary" path="/hosting" size="small">
                    Learn More
                  </Grudr.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-5">Dedicated Cloud</h5>
                  <p>Powerful compute instances with Intel CPUs and 100% SSD storage. </p>
                  <p className="mb-0">Starting at</p>
                  <div className="mb-1">
                    <span className="title-5 mr-1">₹99/mo</span>
                    <span className="title-5 list-price">₹299/mo</span>
                  </div>
                  <Grudr.components.Button type="link" variant="primary" path="/hosting" size="small">
                    Learn More
                  </Grudr.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h5 className="title-5">Load Balancers</h5>
                  <p>Powerful compute instances with Intel CPUs and 100% SSD storage. </p>
                  <p className="mb-0">Starting at</p>
                  <div className="mb-1">
                    <span className="title-5 mr-1">₹99/mo</span>
                    <span className="title-5 list-price">₹299/mo</span>
                  </div>
                  <Grudr.components.Button type="link" variant="primary" path="/hosting" size="small">
                    Learn More
                  </Grudr.components.Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section">
        <Container>
          <Row className="center-xs mb-4">
            <Col sm={12} md={8} lg={8}>
              <h3 className="display-3">Deploy the server anywhere around the world</h3>
              <p className="lead">Worldwide locations and the local presence you need.</p>
            </Col>
          </Row>

          <Row className="center-xs">
            <Col sm={12} md={10} lg={8}>
              <div className="section-locations">

              </div>
            </Col>
          </Row>

       
        </Container>
      </div>

      <div className="section bg-light">
        <Container>
          <Row className="middle-xs">
            <Col sm={12} md={5} lg={5}>
              <h4 className="display-3"><span className="d-block lead">Powerfull Control Panel</span> for better experience.</h4>
              <p className="lead">Spend more time coding and less time managing your infrastructure.</p>
              <Grudr.components.Button variant="primary" type="link" path="/">
                Control Panel Features
              </Grudr.components.Button>
            </Col>

            <Col sm={12} md={7} lg={7}>
              <img className="w-100" src="/images/control-panel.png" alt="control panel"/>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section section-features">
        <Container>
          <Row className="center-xs mb-4">
            <Col sm={12} md={8} lg={8}>
              <h3 className="display-3">Excepteur sint occaecat cupidatat.</h3>
              <p className="lead">Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world.</p>
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
                    Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world.
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
                    Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world.
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
                    Business today moves fast. Faster than ever before. That’s why we bring your enterprise applications into one agile suite. With finance, HR, planning, and analytics together, you gain the insight, efficiency, and agility needed to succeed in the ever-changing world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

       <div className="section bg-light">
        <Container>
          <Row className="center-xs">
            <Col sm={12} md={5} lg={5}>
              <h4 className="title-4">Get started with SSD Cloud</h4>
              <Grudr.components.Button type="link" variant="black-fill" path="/register">
                Create a Free Account
              </Grudr.components.Button>
              <Grudr.components.Button type="link" path="/hosting">
                See all Pricing
              </Grudr.components.Button>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Grudr.registerComponent('HomePage', HomePage);
