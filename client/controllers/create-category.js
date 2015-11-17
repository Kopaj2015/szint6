Template.createCategory.helpers({
    categories: function() {
        return Categories.find({});
    },
    hasCategories: function() {
        return Categories.find({}).count();
    }
});

Template.createCategory.events({
   'submit': function (event) {
       event.preventDefault();
       var name = event.target.name.value;
       if(name) {
           Meteor.call('addCategory', name);
       }
   }
});