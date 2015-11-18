Template.rangList.helpers({
    userNameAndScore: function () {
        return Meteor.users.find({"profile.isAdmin": {$ne: true}}, { sort: {"profile.points": -1}});
    }
});

