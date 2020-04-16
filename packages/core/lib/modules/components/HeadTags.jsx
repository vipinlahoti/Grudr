import Grudr from 'meteor/grudr:lib';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";

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

    return (
      <Helmet>
        <title>{title}</title>

        <meta charSet='utf-8'/>
        <meta name='description' content={description}/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>

        {/* facebook */}
        <meta property='og:type' content='article'/>
        <meta property='og:url' content={url}/>
        <meta property='og:image' content={image}/>
        <meta property='og:title' content={title}/>
        <meta property='og:description' content={description}/>

        {/* twitter */}
        <meta name='twitter:card' content='summary'/>
        <meta name='twitter:image:src' content={image}/>
        <meta name='twitter:title' content={title}/>
        <meta name='twitter:description' content={description}/>

        <link rel='canonical' href={url}/>
        <link name='favicon' rel='shortcut icon' href={Grudr.settings.get('faviconUrl', '/img/favicon.ico')}/>
        <link name='font-face' rel='stylesheet' href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,700|Open+Sans:300,400,600|Material+Icons'/>

        {Grudr.headtags.meta.map((tag, index) => <meta key={index} {...tag}/>)}
        {Grudr.headtags.link.map((tag, index) => <link key={index} {...tag}/>)}
        {Grudr.headtags.script.map((tag, index) => <script key={index} {...tag}>{tag.contents}</script>)}
      </Helmet>
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
