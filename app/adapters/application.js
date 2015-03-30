import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://symfony-rest-edition.dev/app_dev.php',
  namespace: 'api'
});
