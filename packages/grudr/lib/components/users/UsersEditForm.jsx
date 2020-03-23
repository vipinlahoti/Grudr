import { Components, registerComponent, withCurrentUser, withMessages, withSingle2 } from 'meteor/vulcan:core';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Users from 'meteor/vulcan:users';
import { STATES } from 'meteor/vulcan:accounts';

import { Jumbotron, Container, Row } from 'react-bootstrap';

const UsersEditForm = ({ document: user, currentUser, loading }) => {
  
  if (loading) {
    return <Components.Loading />;
  }

  return Users.canUpdate({ collection: Users, document: user, user: currentUser }) ? (
    <React.Fragment>
      <Jumbotron fluid>
        <Container>
          <Row>
            <h4 className="display-3"><FormattedMessage id="users.edit_account" /></h4>
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <div className="section-main">
            <Components.SmartForm
              documentId={user._id}
              collection={Users}
              successCallback={user => {
                props.flash({ id: 'users.edit_success', properties: { name: Users.getDisplayName(user) }, type: 'success' });
              }}
              showRemove={false}
            />
          </div>
        </Row>
      </Container>
    </React.Fragment>
  ) : (
    <FormattedMessage id="app.noPermission" />
  );
};

UsersEditForm.propTypes = {
  terms: PropTypes.object, // a user is defined by its unique _id or its unique slug
};

UsersEditForm.displayName = 'UsersEditForm';

const options = {
  collection: Users,
  fragmentName: 'UsersProfile',
};

registerComponent({
  name: 'UsersEditForm',
  component: UsersEditForm,
  hocs: [withMessages, withCurrentUser, [withSingle2, options]],
});
