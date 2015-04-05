import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('user', {
    path: '/user/:user_id'
  }, function() {
    this.route('edit');
  });
  this.route('note');
  this.route('users');
  this.route('easy');
  this.route('test');
});

export default Router;
