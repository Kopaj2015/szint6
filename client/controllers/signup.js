Template.signup.helpers({

});

Template.signup.events({
    'submit': function(event, template) {
        event.preventDefault();

        var userName = event.target.username.value;
        var email = event.target.email.value;
        var password = event.target.password.value;

        /*
        var email = template.$('[name=email]').val();
        var password = template.$('[name=password]').val();
        var confirm = template.$('[name=confirm]').val();
        */

        var errors = {};

        if (! email) {
            errors.email = 'Email required';
        }

        if (! password) {
            errors.password = 'Password required';
        }

        /*
        Session.set(ERRORS_KEY, errors);
        if (_.keys(errors).length) {
            return;
        }
        */

        Accounts.createUser({
            username: userName,
            email: email,
            password: password,
            createdAt: new Date(),
        }, function(error) {
            if (error) {
                return console.error('Accounts.createUser error!');
            }

            Router.go('login');
        });
    }
});
