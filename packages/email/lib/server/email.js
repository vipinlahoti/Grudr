import Grudr from 'meteor/grudr:lib';
import Juice from 'juice';
import htmlToText from 'html-to-text';
import Handlebars from 'handlebars';

import GrudrEmail from '../modules/namespace.js';

GrudrEmail.templates = {};

GrudrEmail.addTemplates = function (templates) {
  _.extend(GrudrEmail.templates, templates);
};

// for template "foo", check if "custom_foo" exists. If it does, use it instead
GrudrEmail.getTemplate = function (templateName) {

  const template = templateName;

  // note: template prefixes are disabled
  // go through prefixes and keep the last one (if any) that points to a valid template
  // Grudr.config.customPrefixes.forEach(function (prefix) {
  //   if(typeof GrudrEmail.templates[prefix+templateName] === 'string'){
  //     template = prefix + templateName;
  //   }
  // });

  // return Handlebars.templates[template];

  // console.log(templateName)
  // console.log(GrudrEmail.templates[template])

  return Handlebars.compile(GrudrEmail.templates[template], {
    noEscape: true
  });

};

GrudrEmail.buildTemplate = function (htmlContent, optionalProperties = {}) {

  const emailProperties = {
    secondaryColor: Grudr.settings.get('secondaryColor', '#444444'),
    accentColor: Grudr.settings.get('accentColor', '#DD3416'),
    siteName: Grudr.settings.get('title', "Grudr"),
    tagline: Grudr.settings.get('tagline'),
    siteUrl: Grudr.utils.getSiteUrl(),
    body: htmlContent,
    unsubscribe: '',
    accountLink: Grudr.utils.getSiteUrl()+'account',
    footer: Grudr.settings.get('emailFooter'),
    logoUrl: Grudr.settings.get('logoUrl'),
    logoHeight: Grudr.settings.get('logoHeight'),
    logoWidth: Grudr.settings.get('logoWidth'),
    ...optionalProperties
  };

  const emailHTML = GrudrEmail.getTemplate('wrapper')(emailProperties);

  const inlinedHTML = Juice(emailHTML, {preserveMediaQueries: true});

  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">'

  return doctype+inlinedHTML;
};

GrudrEmail.send = function(to, subject, html, text){

  // TODO: limit who can send emails
  // TODO: fix this error: Error: getaddrinfo ENOTFOUND

  const from = Grudr.settings.get('defaultEmail', 'noreply@example.com');
  const siteName = Grudr.settings.get('title', 'Grudr');
  subject = '[' + siteName + '] ' + subject;

  if (typeof text === 'undefined'){
    // Auto-generate text version if it doesn't exist. Has bugs, but should be good enough.
    text = htmlToText.fromString(html, {
        wordwrap: 130
    });
  }

  console.log('//////// sending email…'); // eslint-disable-line
  console.log('from: '+from); // eslint-disable-line
  console.log('to: '+to); // eslint-disable-line
  console.log('subject: '+subject); // eslint-disable-line
  // console.log('html: '+html);
  // console.log('text: '+text);

  const email = {
    from: from,
    to: to,
    subject: subject,
    text: text,
    html: html
  };

  try {
    Email.send(email);
  } catch (error) {
    console.log("// error while sending email:"); // eslint-disable-line
    console.log(error); // eslint-disable-line
  }

  return email;
};

GrudrEmail.buildAndSend = function (to, subject, template, properties) {
  const html = GrudrEmail.buildTemplate(GrudrEmail.getTemplate(template)(properties));
  return GrudrEmail.send (to, subject, html);
};

GrudrEmail.buildAndSendHTML = function (to, subject, html) {
  return GrudrEmail.send (to, subject, GrudrEmail.buildTemplate(html));
};
