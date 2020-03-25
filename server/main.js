import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';

import { LinksCollection } from '/imports/api/links';
import App from '/imports/ui/App';
import '/imports/modules/core/modules';
import '/imports/modules/components';
// export * from '../modules/index.js';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.publish('links', function () {
  return LinksCollection.find();
});

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }

  onPageLoad(sink => {
    sink.renderIntoElementById('react-app', renderToNodeStream(
      <App location={sink.request.url} />
    ));
  });
});
