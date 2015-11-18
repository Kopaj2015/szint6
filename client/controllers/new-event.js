Template.newEvent.helpers({
    categories: function() {
        return Categories.find({});
    },
    hasCategories: function() {
        return Categories.find({}).count();
    }
});

Template.newEvent.events({
    'submit': function (event) {
        event.preventDefault();

        if(event.target.title.value) {
            Meteor.call('addNewEvent', event.target);
        }

    }
});