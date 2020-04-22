import GrudrEmail from 'meteor/grudr:email';

GrudrEmail.addTemplates({
  test:                     Assets.getText("lib/server/emails/common/test.handlebars"),
  wrapper:                  Assets.getText("lib/server/emails/common/wrapper.handlebars"),
  accountApproved:          Assets.getText("lib/server/emails/users/accountApproved.handlebars"),
  newUser:                  Assets.getText("lib/server/emails/users/newUser.handlebars"),
});
