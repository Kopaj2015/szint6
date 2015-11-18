Template.newEvent.helpers({
    categories: function() {
        return Categories.find({});
    },
    hasCategories: function() {
        return Categories.find({}).count();
    },
    users: function() {
        return Meteor.users.find({});
    },
    hasUsers: function() {
        return Meteor.users.find({}).count();
    }
});

Template.newEvent.events({
    'submit': function (event) {
        event.preventDefault();
        if(event.target.title.value) {
            Meteor.call(
                'addNewEvent',
                event.target.title.value,
                event.target.part1.value,
                event.target.part2.value,
                event.target.category.value
            );
            Router.go('/');
        }
    }
});