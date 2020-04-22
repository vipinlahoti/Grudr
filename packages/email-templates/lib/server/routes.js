import GrudrEmail from 'meteor/grudr:email';
import { Picker } from 'meteor/meteorhacks:picker';

Meteor.startup(function () {
  _.forEach(GrudrEmail.emails, (email, key) => {

    // template live preview routes
    Picker.route(email.path, (params, req, res) => {

      let html;
      // if email has a custom way of generating test HTML, use it
      if (typeof email.getTestHTML !== 'undefined') {
        html = email.getTestHTML.bind(email)(params);

      } else {
        // else get test object (sample post, comment, user, etc.)
        const testObject = email.getTestObject(params._id);

        // get test object's email properties
        const properties = email.getProperties(testObject);

        // then apply email template to properties, and wrap it with buildTemplate
        html = GrudrEmail.buildTemplate(GrudrEmail.getTemplate(email.template)(properties));

      }

      // return html
      res.end(html);

    });

    // raw template
    Picker.route('/email/template/:template', (params, req, res) => {
      res.end(GrudrEmail.templates[params.template]);
    });

  });
});
