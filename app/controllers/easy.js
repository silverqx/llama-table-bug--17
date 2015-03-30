import Ember from 'ember';
import Saving from 'ember-easy-form-extensions/mixins/controllers/saving';

export default Ember.Controller.extend(
  Saving, {

    // Validations run out of the box
    validations: {
      title: {
        presence: true
      }
    },

    cancel: function() {
      this.transitionTo('posts');
    },

    save: function() {
      // Validations have already been run by the Saving mixin
      this.get('content').save().then(function(post) {
        this.transitionTo('post', post);
      });
    }

  });
