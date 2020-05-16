import Grudr from 'meteor/grudr:lib';
import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

class DomainsPage extends Component {

  state = {
    value: '',
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log(e)
  }

  handleChange = async e => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <Grudr.components.HeadTags title="Hosting" description="Web Hosting Page" />

        <Jumbotron>
          <Container>
            <Row className="center-xs">
              <Col>
                <div className="hero__wrapper text-dark">
                  <Grudr.components.DomainSearch
                    title="Get a Domain Name"
                    lead="With Privacy Protection and lots more."
                    placeholder="Find your Perfect Domain Name."
                    handleValue={this.state.value}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Grudr.components.MiniFooter
          variant="bg-sweet-purple"
          className="center-xs"
          title="Each and every domain name comes with all you need to get online."
        />

        <div className="section bg-gray">
          <Container>
            <Row className="center-xs mb-2">
              <Col sm={12} md={8} lg={8}>
                <h3 className="title-3">What all you get with every Domain Name?</h3>
              </Col>
            </Row>

            <Row>
              <Col sm={12} md={4} lg={4}>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Grudr.components.Icon name="fast_forward"/>
                    </div>
                    <Card.Title>Domain Forwarding and Masking</Card.Title>
                    <Card.Text>
                      Direct any domain name you own to your website. Anyone who types that domain name into their browser is taken directly to your website.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4} lg={4}>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Grudr.components.Icon name="lock_outline"/>
                    </div>
                    <Card.Title>Domain Locking</Card.Title>
                    <Card.Text>
                      Domain locking prevents accidental or intentional transfers of domain ownership and stops anyone from redirecting your nameservers.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4} lg={4}>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Grudr.components.Icon name="accessibility"/>
                    </div>
                    <Card.Title>Total DNS Control</Card.Title>
                    <Card.Text>
                      Manage your domain nameserver (DNS) records and set your email, FTP, sub-domains and website location all from one control panel.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4} lg={4}>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Grudr.components.Icon name="subdirectory_arrow_right"/>
                    </div>
                    <Card.Title>Change of Registration</Card.Title>
                    <Card.Text>
                      Assign your domain name to someone else or change the contacts for your domain online anytime.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4} lg={4}>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Grudr.components.Icon name="snooze"/>
                    </div>
                    <Card.Title>Status Alerts</Card.Title>
                    <Card.Text>
                      Monitor the status of your domain and get instant alerts if there’s been a change.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4} lg={4}>
                <Card className="featured-card">
                  <Card.Body>
                    <div className="card-icon card-icon-lg">
                      <Grudr.components.Icon name="update"/>
                    </div>
                    <Card.Title>Auto Renew Protection</Card.Title>
                    <Card.Text>
                      No need to watch expiration dates to make sure you renew on time! Keep your domains, hosting, website builders, and other products in your name and under your control.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>
          </Container>
        </div>

      </React.Fragment>
    )
  }
}

Grudr.registerComponent('DomainsPage', DomainsPage);
