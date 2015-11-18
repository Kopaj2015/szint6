Template.listUsers.helpers({
    users: function() {
        return Meteor.users.find({});
    },
    hasUsers: function() {
        return Meteor.users.find({}).count();
    }
});

Template.listUsers.events({
    'click .deleteBtn': function (event) {

        console.log(event);

        event.preventDefault();

        Meteor.call('removeUser', event.target.name);
    }
});