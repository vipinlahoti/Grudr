// import Events from 'meteor/grudr:events';

FlowRouter.addToQueryArray = function (key, value) {
  var keyArray = FlowRouter.getQueryParam(key) || [];
  keyArray.push(value);
  var params = {};
  params[key] = keyArray;
  FlowRouter.setQueryParams(params);
}

FlowRouter.removeFromQueryArray = function (key, value) {
  var keyArray = FlowRouter.getQueryParam(key);
  keyArray = _.without(keyArray, value);
  var params = {};
  params[key] = keyArray;
  FlowRouter.setQueryParams(params);
}

FlowRouter.route('/', {
  name: "helloworld_page",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "helloworld_page"});
  }
});

FlowRouter.notFound = {
  action: function() {
    if (Meteor.isClient) {
      DocHead.addMeta({
        name: "name",
        property: "prerender-status-code",
        content: "404"
      });
      DocHead.addMeta({
        name: "name",
        property: "robots",
        content: "noindex, nofollow"
      });
    }
    BlazeLayout.render("layout", {main: "not_found"});
  }
};

// FlowRouter.triggers.enter([function () {Events.analyticsRequest()}]);

// FlowRouter.triggers.exit([function () {Messages.clearSeen()}]);
