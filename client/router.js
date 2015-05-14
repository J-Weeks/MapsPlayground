Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/Home');

Router.route('/', function () {
  this.render('/Home');
});
