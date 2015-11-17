/**
 * Created by Such Balázs on 2015.11.17..
 */
Template.adminCreateUser.events({
    'submit': function (event, template) {
        event.preventDefault();

        var userName = event.target.username.value;
        var email = event.target.email.value;
        var password = event.target.password.value;

        if (!userName) {
            errors.email = 'Username required';
        }

        if (!email) {
            errors.email = 'Email required';
        }

        if (!password) {
            errors.password = 'Password required';
        }


        Accounts.createUser({
            username: userName,
            email: email,
            password: password,
            profile: {
                isAdmin: false,
                points: 1000
            }
        }, function (error) {
            if (error) {
                return console.error('Accounts.createUser error!');
            }

            Router.go('login');
        });
    }
});