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
    template: 'welcome'
});

Router.route('/login');
Router.route('/admin/create_user');

Router.route('/admin/create_category', {
    name: 'createCategory',
    subscriptions: function() {
        return [
            Meteor.subscribe('categories')
        ];
    }
});

Router.route('/new_event', {
    name: 'newEvent',
    template: 'newEvent',
    subscriptions: function() {
        return [
            Meteor.subscribe('categories')
        ];
    }
});