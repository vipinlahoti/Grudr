import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';
import { withTracker } from 'meteor/react-meteor-data';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

const UserProfile = (props, { currentUser }) => {
  const getUser = Users;
  console.log('getUser', getUser, ' -- currentUser -- ', currentUser);

  return (
    <Grudr.components.CanDo action="users.edit.own" displayNoPermissionMessage={true}>
      <Grudr.components.HeadTags url={Users.getProfileUrl(currentUser, true)} title={Users.getDisplayName(currentUser)} />
      
      <Jumbotron className="section-hero section-small">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <div className="d-flex">
                <Grudr.components.Avatar size="large" user={currentUser} link={false} className="mr-3" />
                <h2 className="page-title">{Users.getDisplayName(currentUser)}</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

    </Grudr.components.CanDo>
  )
}

UserProfile.contextTypes = {
  currentUser: PropTypes.object
}

const UserProfileContainer = withTracker(() => {
  let subscriptions;

  if (Meteor.isClient) {
    subscription = Meteor.subscribe('users.single');
  }
  console.log('subscription: ', subscription)

  return {
    // links: LinksCollection.find().fetch(),
  };
})(UserProfile);

Grudr.registerComponent('UserProfile', UserProfile);
