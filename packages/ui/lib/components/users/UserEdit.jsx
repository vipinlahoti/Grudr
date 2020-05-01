import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';
import GrudrForm from 'meteor/grudr:forms';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

const UserEdit = (props, context) => {
  const user = context.currentUser;

  return (
    <Grudr.components.CanDo
      action="users.edit.own"
      displayNoPermissionMessage={true}
    >
      <Jumbotron className="section-hero section-xsmall">
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
              <GrudrForm
                collection={Users}
                document={user}
                methodName='users.edit'
                successCallback={(user)=>{
                  context.messages.flash(props.intl.formatMessage({id: 'users.edit_success'}, {name: Users.getDisplayName(user)}), 'success')
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Grudr.components.CanDo>
  )
};

UserEdit.contextTypes = {
  currentUser: PropTypes.object,
  messages: PropTypes.object
};

Grudr.registerComponent('UserEdit', injectIntl(UserEdit));
