import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from 'react-helmet';

import { Row, Col } from 'react-bootstrap';

const Layout = ({currentUser, children }) =>

  <div className={classNames('wrapper')} id="wrapper">

    <Helmet>
      <link name="font-awesome" rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link name="font-face" rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,700|Open+Sans:300,400,600|Material+Icons"/>
    </Helmet>
   
    <Components.HeadTags />

    {currentUser ? <Components.UsersProfileCheck currentUser={currentUser} documentId={currentUser._id} /> : null}

    {currentUser ? 
      <React.Fragment>
        <Components.Header />
        <Row>
          <Col xs={2}>
            <Components.Sidebar />
          </Col>
          <Col xs={10}>
            <Components.FlashMessages />
            {children}
          </Col>
        </Row>
      </React.Fragment>
      : 
      <React.Fragment>
        <Components.FlashMessages />
        <Components.Header />
        {children}
        <Components.Footer />
      </React.Fragment>
    }
    
  
  </div>

registerComponent({ name: 'Layout', component: Layout, hocs: [withCurrentUser] });
