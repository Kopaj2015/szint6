Meteor.publish('events', function() {
    return Events.find({});
});

Meteor.publish('categories', function() {
    return Categories.find({});
});

Meteor.publish('bets', function() {
    return Bets.find({});
});

Meteor.publish('users', function() {
    return Meteor.users.find({});
});

Meteor.startup(function () {

    /*
     * Init admin
     */
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            username: 'admin',
            email: 'admin@hatodik.hu',
            password: 'admin',
            profile: {
                isAdmin: true,
                points: 0
            }
        });
    }


});

