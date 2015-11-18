/**
 * Router configuration.
 * Application layout definition.
 */
Router.configure({
    layoutTemplate: 'defaultLayout'
});


Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
        this.redirect('/');
    } else {
        this.next();
    }
}, {
    only: ['createCategory']
});

/**
 *  ROUTES
 */

Router.route('/', {
    name:     'welcome',
    template: 'welcome',
    subscriptions: function() {
        return [
            Meteor.subscribe('users')
        ];
    }
});

Router.route('/login');
Router.route('/admin/users', {
    name: 'listUsers',
    template: 'listUsers',
    subscriptions: function() {
        return [
            Meteor.subscribe('users')
        ];
    }
});
Router.route('/admin/create_user', {
    name: 'createUser',
    template: 'adminCreateUser'
});

Router.route('/admin/create_category', {
    name: 'createCategory',
    subscriptions: function() {
        return [
            Meteor.subscribe('categories')
        ];
    }
});

Router.route('/admin/create_event', {
    name: 'newEvent',
    template: 'newEvent',
    subscriptions: function() {
        return [
            Meteor.subscribe('categories'),
            Meteor.subscribe('users')
        ];
    }
});