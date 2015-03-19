import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  message: attr('string'),
  version: attr('string')
});
