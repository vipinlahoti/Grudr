import Grudr from 'meteor/grudr:lib';
import Users from 'meteor/grudr:users';

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

const DashboardPage = (props, { currentUser }) => {
  return (
    <Grudr.components.CanDo action="users.edit.own" displayNoPermissionMessage={true}>
      <Grudr.components.HeadTags title="Dashboard" description="Dashboard description" />

      <Jumbotron className="section-hero section-small">
        <Container>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <h4 className="display-4">Welcome {Users.getDisplayName(currentUser)}</h4>
              <p>It's Monday, April 20</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

    </Grudr.components.CanDo>
  )
}

DashboardPage.contextTypes = {
  currentUser: PropTypes.object,
}

Grudr.registerComponent('DashboardPage', DashboardPage);
