import React from 'react';
import PropTypes from 'prop-types';
import { withMessages, withCurrentUser, getSetting, Components, registerComponent } from 'meteor/vulcan:core';
import { Posts } from '../../modules/posts/index.js';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const logoUrl = getSetting('logoUrl');
const siteTitle = getSetting('title', 'My App');
const tagline = getSetting('tagline');

const NewPostButton = () => (
  <Components.Button className="posts-new-button" variant="primary">
    <Components.Icon name="new" /> <FormattedMessage id="posts.new_post" />
  </Components.Button>
);

const Header = ({ currentUser, flash, history }) => {
  return (
    <Navbar bg="light">
      <div className="collapse navbar-collapse">
        <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
        {tagline ? <span>{tagline}</span> : ''}

        <Nav className="mr-auto">
          <Components.UsersMenu />

          {currentUser ? (
            <Components.NewButton
              collection={Posts}
              label={<FormattedMessage id="posts.new_post" />}
              component={<NewPostButton />}
              mutationFragmentName="PostPage"
              successCallback={post => {
                history.push({ pathname: post.pageUrl });
                flash({ id: 'posts.created_message', type: 'success' });
              }}
            />
          ) : (
            <Components.ModalTrigger size="sm" component={<NewPostButton />}>
              <div>
                <p className="posts-new-form-message">
                  <FormattedMessage id="posts.sign_up_or_log_in_first" />
                </p>
                <Components.AccountsLoginForm />
              </div>
            </Components.ModalTrigger>
          )}
        </Nav>
      </div>
    </Navbar>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent({ name: 'Header', component: Header, hocs: [withCurrentUser, withMessages, withRouter] });
