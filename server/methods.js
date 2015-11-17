Meteor.methods({
    addCategory: function(name) {
        Categories.insert({
            name: name
        })
    }
});

