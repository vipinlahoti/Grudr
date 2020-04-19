import Grudr from 'meteor/grudr:lib';
import { withTracker } from 'meteor/react-meteor-data';
import Messages from '../messages.js';
import Events from "meteor/grudr:events";

// const AppContainer = withTracker((props, onData) => {

//   const subscriptions = Grudr.subscriptions.map((sub) => Meteor.subscribe(sub.name, sub.arguments));

//   const data = {
//     currentUser: Meteor.user(),
//     actions: {call: Meteor.call},
//     events: Events,
//     messages: Messages
//   }

//   if (!subscriptions.length || _.every(subscriptions, handle => handle.ready())) {
//     data.ready = true;
//     onData(null, data);
//   } else {
//     onData(null, {ready: false});
//   }
// });

// export default AppContainer;

export const withSubscription = C => {
  const Wrapped = (props) => {
    const subscriptions = Grudr.subscriptions.map((sub) => Meteor.subscribe(sub.name, sub.arguments));
    const { loading, data } = subscriptions;
    const namedRes =
    {
      currentUserLoading: loading,
      currentUser: data && data.currentUser,
      currentUserData: data
    };
    return <C {...props} {...namedRes} />;
  };

  return Wrapped;
};

export default withSubscription;


// const AppContainer = withTracker(() => {
//   let subscriptions;
//   let data;

//   if (Meteor.isClient) {
//     subscriptions = Grudr.subscriptions.map((sub) => Meteor.subscribe(sub.name, sub.arguments));

//     data = {
//       currentUser: Meteor.user(),
//       actions: {call: Meteor.call},
//       messages: Messages,
//       ready: null,
//     }
//   }

//   console.log('subscriptions: ', subscriptions);
//   console.log('data: ', data);

//   // if (!subscriptions.length || _.every(subscriptions, handle => handle.ready())) {
//   //   data.ready = true;
//   //   console.log('if subscriptions: ', subscriptions);
//   // } else {
//   //   console.log('else subscriptions: ', subscriptions);
//   //   data.ready = false;
//   // }

//   // if ((subscriptions && subscriptions.ready()) || Meteor.isServer) {
//   //   // data.ready = false;
//   //   console.log('data: ', data);
//   //   // returnObj.data = SomeCollection.findOne({ some: 'condition' });
//   // }

//   return data;
// })(App);
