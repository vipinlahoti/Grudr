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
    <React.Fragment>
      <Grudr.components.HeadTags url={Users.getProfileUrl(currentUser, true)} title={Users.getDisplayName(currentUser)} />
      
      <Jumbotron className="section-hero section-dashboard">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={8}>
              <div className="d-flex">
                <Grudr.components.Avatar className="mr-3" size="large" user={currentUser} link={false} />
                <div className="">
                  <h2 className="page-title">{Users.getDisplayName(currentUser)}</h2>
                  <div className="mt-2">{currentUser.bio}</div>
                  <div className="mt-2">Karma: {currentUser.karma}</div>
                  <div className="mt-2">Twitter: {currentUser.twitterUsername}</div>
                  <div className="mt-2">Website: {currentUser.website}</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

    </React.Fragment>
  )
}

UserProfile.contextTypes = {
  currentUser: PropTypes.object
}

Grudr.registerComponent('UserProfile', UserProfile);
