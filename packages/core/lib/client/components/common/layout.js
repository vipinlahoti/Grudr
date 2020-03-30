import './layout.html';
import Grudr from '../../../modules';

const init = _.once(function () {
  const title = Grudr.settings.get('title', 'Grudr');

  if (!!Grudr.settings.get('tagline')) {
    title += ': '+Grudr.settings.get('tagline');
  }
  DocHead.setTitle(title);

  if (!!Grudr.settings.get('description')) {
    DocHead.addMeta({name: 'description', content: Grudr.settings.get('description')});
    DocHead.addMeta({property: 'og:description', content: Grudr.settings.get('description')});
  }

  if (!!Grudr.settings.get('siteImage')) {
    DocHead.addMeta({property: 'og:image', content: Grudr.settings.get('siteImage')});
  }
});

// On Create
Template.layout.onCreated( function () {
  Session.set('currentScroll', null);

  DocHead.setTitle("loading");

  Tracker.autorun(function () {
    if (FlowRouter.subsReady()) {
      init();
    }
  });

});

// On Render
Template.layout.onRendered( function () {
  const currentScroll = Session.get('currentScroll');

  if(currentScroll) {
    $('body').scrollTop(currentScroll);
    Session.set('currentScroll', null);
  }
});

// Helpers
Template.layout.helpers({
  appIsReady() {
    console.log(FlowRouter, FlowRouter.subsReady())
    return FlowRouter.subsReady();
  },
  pageName() {
    FlowRouter.watchPathChange();
    return FlowRouter.current().route.name;
  }
});
