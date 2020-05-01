const Messages = {
  // Local (client-only) collection
  collection: new Meteor.Collection(null),

  flash(content, type) {
    type = (typeof type === 'undefined') ? 'error': type;
    // Store errors in the local collection
    this.collection.insert({content:content, type:type, seen: false, show:true});

    console.log('this.collection: ', content, ' type: ',type)
  },

  markAsSeen(messageId) {
    this.collection.update(messageId, {$set: {seen:true}});
  },

  clear(messageId) {
    this.collection.update(messageId, {$set: {show:false}});
  },

  clearSeen() {
    this.collection.update({seen:true}, {$set: {show:false}}, {multi:true});
  }
};

export default Messages;
