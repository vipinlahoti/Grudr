import React from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import { withApollo } from 'react-apollo';

import { Alert, Container, Row } from 'react-bootstrap';

const UsersAccountBar = ({ currentUser }) => {
  return (
    <Alert variant="danger">
      <Container>
        <Row>
          <p className="m-0">Welcome <strong>Dr.{Users.getDisplayName(currentUser)}</strong>. Switch to your account.</p>
        </Row>
      </Container>
    </Alert>
  );
};

UsersAccountBar.displayName = 'UsersAccountBar';

UsersAccountBar.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent({ name: 'UsersAccountBar', component: UsersAccountBar, hocs: [withCurrentUser, withApollo]  });
