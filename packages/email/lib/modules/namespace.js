/**
 * @summary GrudrEmail namespace
 * @namespace GrudrEmail
 */
const GrudrEmail = {};

GrudrEmail.emails = {};

GrudrEmail.addEmails = emails => {
  GrudrEmail.emails = Object.assign(GrudrEmail.emails, emails);
};

export default GrudrEmail;
