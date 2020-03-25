import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';

import React from 'react';
import { renderToNodeStream } from 'react-dom/server';

import App from '/imports/ui/components/core/App';
import '/imports/modules';

Meteor.startup(() => {
  // TODO: SSR
  // onPageLoad(sink => {
  //   sink.renderIntoElementById('react-app', renderToNodeStream(
  //     <App location={sink.request.url} />
  //   ));
  // });
});
