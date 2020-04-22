import GrudrEmail from 'meteor/grudr:email';

GrudrEmail.addEmails({
  test: {
    template: 'test',
    path: '/email/test',
    getProperties() {
      return {date: new Date()};
    },
    subject() {
      return 'This is a test';
    },
    getTestObject() {
      return {date: new Date()};
    }
  }

});
