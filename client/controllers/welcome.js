Template.welcome.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.welcome.events({
  'click form': function () {
    Session.set('counter', Session.get('counter') + 1);
  }
});
