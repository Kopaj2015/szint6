Template.welcome.helpers({
  categories: function() {
    return Categories.find({});
  },
  events: function(categoryId) {
    return Events.find({category : categoryId});
  },
  getCategory: function(categoryId) {
    return Categories.findOne({_id : categoryId}).name;
  }
});

Template.welcome.events({

});
