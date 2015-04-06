import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    submit: function() {
      var model = this.get('model');

      if (model.get('isDirty')) {
        model.save().then(() => this.transitionToRoute('users'));
      }
    }
  }

});
