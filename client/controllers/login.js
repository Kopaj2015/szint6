Template.login.helpers({

});

Template.login.events({
    'submit': function(event) {
        event.preventDefault();

        var userName = event.target.username.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(userName, password, function(error) {
            if (error) {
                return console.log('Meteor.loginWithPassword() error!');
            }
            Router.go('welcome');
        });
    }
});
