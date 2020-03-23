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

const Sidebar = ({ flash, history }) => {
  return (
    <nav className="bg-white sidebar">
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
    </nav>
  );
};

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent({ name: 'Sidebar', component: Sidebar, hocs: [withCurrentUser, withMessages, withRouter] });
