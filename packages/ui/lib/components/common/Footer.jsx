import Grudr from 'meteor/grudr:lib';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const siteTitle = Grudr.settings.get('title', 'Grudr');

const Footer = () =>
  <footer className="section-small">
      <Container>
        <Row className="between-xs">
          <Col>
            <Nav>
              <Link to={{ pathname: '/help' }} className="nav-link">
                Help
              </Link>

              <Link to={{ pathname: '/contact-us' }} className="nav-link">
                Contact Us
              </Link>

              <Link to={{ pathname: '/whois' }} className="nav-link">
                WHOIS
              </Link>
            </Nav>
            <hr />
            <div className="copyright">
              Use of this Site is subject to express terms of use. <br />
              By using this site, you signify that you agree to be bound by these &nbsp;
              <Link to={{ pathname: '/tos/universal-tos'}}>
                Universal Terms of Service
              </Link>.
            </div>
            <div className="copyright mt-1">
              Copyright &copy; 2020 All Rights Reserved. &nbsp;
              <Link to={{ pathname: '/tos/privacy-policy'}}>
                Privacy Policy
              </Link>.
            </div>
            
          </Col>
          <Col>
            <Grudr.components.Logo siteTitle={siteTitle}/>
          </Col>
        </Row>
      </Container>
    </footer>

Grudr.registerComponent('Footer', Footer);
