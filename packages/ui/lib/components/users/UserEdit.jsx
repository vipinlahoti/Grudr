import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';
import GrudrForm from 'meteor/grudr:forms';
import { withTracker } from 'meteor/react-meteor-data';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';


const UserEdit = (props, context) => {
  console.log('props: ', props, 'context: ', context);
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


UserEdit.propTypes = {
  user: PropTypes.object,
};

UserEdit.contextTypes = {
  currentUser: PropTypes.object,
  messages: PropTypes.object,
};

const UserEditContainer = withTracker(() => {
  let user;

  if (Meteor.isClient) {
    const getUser =  Meteor.user();
    const terms = getUser._id;
    const subscriptions = Meteor.subscribe('users.single', {_id: terms});
    

    user = Users.getUser(terms)
  }

  console.log('uuu', user);
  return user;
})(UserEdit);

Grudr.registerComponent('UserEdit', injectIntl(UserEditContainer));
