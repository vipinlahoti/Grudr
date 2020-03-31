import './user_top_menu.html';

Template.user_top_menu.helpers({
  user() {
    return Meteor.user();
  },

  menuItems() {
    const viewableItems = _.reject(Grudr.menuItems.get("userMenu"), function (item) {
      return (item.adminOnly && !Users.is.admin(Meteor.user()));
    });

    // viewableItems = viewableItems.map(function (item) {
    //   item.parentId = "userMenuRoot";
    //   return item;
    // });

    // viewableItems.push({
    //   id: "userMenuRoot",
    //   template: "user_top_menu_label"
    // });
    // console.log(viewableItems);

    return viewableItems;
  },

  menuType() {
    if (this.zone === "mobileNav") {
      return 'collapsible';
    } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {
      return 'dropdown';
    } else {
      return 'collapsible';
    }
  }
});
