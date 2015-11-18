Template.login.helpers({
    username: function() {
        return Meteor.user().username();
    }
});

Template.login.events({
    'submit form.login-form': function(event) {
        event.preventDefault();

        var userName = event.target.username.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(userName, password, function(error) {
            if (error) {
                return console.log('Meteor.loginWithPassword() error!');
            }
            Router.go('welcome');
        });
    },
    'click .logout' : function(event) {
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});
