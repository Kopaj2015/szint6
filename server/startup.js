Meteor.publish('events', function() {
    return Events.find({});
});

Meteor.publish('categories', function() {
    return Categories.find({});
});

Meteor.publish('bets', function() {
    return Bets.find({});
});

Meteor.startup(function () {

    /*
     * Init admin
     */
    Accounts.createUser({
        username: 'admin',
        email: 'admin@hatodik.hu',
        password: 'admin',
        profile: {
            isAdmin: true,
            points: 0
        }
    });



});

