import Grudr from 'meteor/grudr:lib';
import React from 'react';

const siteTitle = Grudr.settings.get('title');
const logoUrl = Grudr.settings.get('logoUrl');

const wrapper = {
  alignItems: 'center',
  borderTop: '5px solid #5e72e4',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center'
};

const Loading = props => {
  return (
    <div style={wrapper}>
      <Grudr.components.Logo logoUrl={logoUrl} siteTitle={siteTitle}/>
    </div>
  );
};

Grudr.registerComponent('Loading', Loading);
