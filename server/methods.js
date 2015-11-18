Meteor.methods({
    addCategory: function(name) {
        Categories.insert({
            name: name
        })
    },
    addNewEvent: function (target) {
        Events.insert({
            title: target.title.value,
            date: new Date(),
            part1 : target.part1.value,
            part2 : target.part2.value,
            winner: null,
            category: target.category.value
        });
    }
});

