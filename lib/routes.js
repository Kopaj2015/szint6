/**
 * Router configuration.
 * Application layout definition.
 */
Router.configure({
    layoutTemplate: 'defaultLayout'
});

/*
    Router.onBeforeAction(function () {
        if (!Meteor.userId()) {
            this.redirect('chatRoom');
        } else {
            this.next();
        }
    }, {
        only: ['userDetails']
    });
*/

/**
 *  ROUTES
 */

Router.route('/', {
    name:     'welcome',
    template: 'welcome'
});

Router.route('/login');
Router.route('/admin/create_user');
Router.route('/admin/create_category');