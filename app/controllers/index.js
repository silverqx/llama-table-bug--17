import Ember from 'ember';

export default Ember.Controller.extend({
  test: 'yyyyasd',
  message: '',

  actions: {
    onClick: function() {
      this.set('test', 'Clicked!');
      return this.set('message', 'Clicked!');
    }
  }
});
