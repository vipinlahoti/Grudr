import Grudr from 'meteor/grudr:lib';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

const MiniFooter = ({title, variant, link, className}) =>
  <div className={classNames('section-stripe section-xsmall text-white', className, variant)}>
    <Container>
      <Row className="center-xs">
        <Col sm={8}>
          <Row className={className}>
            <Col>
              <h4 className="mb-0 font-weight-light title-5">{title}</h4>
            </Col>

            {link ?
              (<Col>
                <Grudr.components.Button variant="white" type="link" path={link}>
                  Get Started
                </Grudr.components.Button>
              </Col>)
            : null }

          </Row>
        </Col>
      </Row>
    </Container>
  </div>

Grudr.registerComponent('MiniFooter', MiniFooter);
