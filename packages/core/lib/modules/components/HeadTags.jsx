import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Grudr from '../config';

class HeadTags extends Component {
  render() {

    const url = !!this.props.url ? this.props.url : Grudr.utils.getSiteUrl();
    const title = !!this.props.title ? this.props.title : Grudr.settings.get('title', 'Grudr');
    const description = !!this.props.description ? this.props.description : Grudr.settings.get('tagline');

    // default image meta: logo url, else site image defined in settings
    let image = !!Grudr.settings.get('siteImage') ? Grudr.settings.get('siteImage'): Grudr.settings.get('logoUrl');
    
    // overwrite default image if one is passed as props 
    if (!!this.props.image) {
      image = this.props.image; 
    }

    // add site url base if the image is stored locally
    if (!!image && image.indexOf('//') === -1) {
      image = Grudr.utils.getSiteUrl() + image;
    }

    const meta = Grudr.headtags.meta.concat([
      { charset: 'utf-8' },
      { name: 'description', content: description },
      // responsive
      { name: 'viewport', content:'width=device-width, initial-scale=1' },
      // facebook
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      //twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image:src', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description }
    ]);

    const link = Grudr.headtags.link.concat([
      { rel: 'canonical', href: Grudr.utils.getSiteUrl() },
      { rel: 'shortcut icon', href: Grudr.settings.get('faviconUrl', '/img/favicon.png') },
      { name: 'font-face', rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,700|Open+Sans:300,400,600|Material+Icons'}
    ]);

    return (
      <Helmet title={title} meta={meta} link={link} />
    );
  }
}

HeadTags.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Grudr.registerComponent('HeadTags', HeadTags);
