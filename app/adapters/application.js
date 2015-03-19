import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://symfony-rest-edition.dev',
  namespace: 'app_dev.php/api'
});
