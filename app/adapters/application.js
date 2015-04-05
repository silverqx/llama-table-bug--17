import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'http://symfony-rest-edition.dev/app_dev.php',
  namespace: 'api/v1',

  buildURL: function() {
    var url = this._super.apply(this, arguments);

    if (true === config.APP.xdebug) {
      url += '?XDEBUG_SESSION_START';
    }

    return url;
  }
});
