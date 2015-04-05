import Ember from 'ember';
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

var attr = DS.attr;

var User = DS.Model.extend(EmberValidations.Mixin, {
  username: attr('string'),
  email: attr('string'),
  blogs: DS.hasMany('blog'),
  isntValid: Ember.computed.not('isValid')
});

User.reopen({

  validations: {
    id: {
      presence: true,
      numericality: {
        onlyInteger: true,
        greaterThan: 0
      }
    },

    username: {
      presence: true,
      length: {
        minimum: 5
      }
    },

    email: {
      presence: true,
      length: {
        minimum: 5
      }
    }
  }

});

export default User;
