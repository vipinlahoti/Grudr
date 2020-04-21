import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';


const UserEdit = (props, context) => {
// 
  return (
    <Grudr.components.CanDo
      action="users.edit.own"
      displayNoPermissionMessage={true}
    >
      <Jumbotron className="section-hero section-small">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <h3 className="display-3"><FormattedMessage id="users.edit_account"/></h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      
      <div className="section">
        <Container>
          <Row>
            <Col sm={12} md={8} lg={8}>
              Edit Form here.
            </Col>
          </Row>
        </Container>
      </div>
    </Grudr.components.CanDo>
  )
};


UserEdit.propTypes = {
  // user: PropTypes.object.isRequired,
};

UserEdit.contextTypes = {
  currentUser: PropTypes.object,
};

Grudr.registerComponent('UserEdit', UserEdit);
