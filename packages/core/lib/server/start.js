import { onPageLoad } from 'meteor/server-render';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { object } from 'prop-types';
import { Helmet } from 'react-helmet';

onPageLoad(sink => {
  const context = {};
  let htmlContent = '';

  const App = props => {
  return (
      <StaticRouter location={props.location} context={context}>
        <Grudr.components.App />
      </StaticRouter>
    );
  }

  App.propTypes = {
    location: object.isRequired
  };

  htmlContent = ReactDOM.renderToString(
    <App location={sink.request.url} />
  );

  const wrappedHtmlContent = `<div id="react-app">${htmlContent}</div>`;
  const helmet = Helmet.renderStatic();

  sink.appendToBody(wrappedHtmlContent);
  sink.appendToHead(helmet.meta.toString());
  sink.appendToHead(helmet.title.toString());  
});
