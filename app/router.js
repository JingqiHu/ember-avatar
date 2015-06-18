import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('test');
/*	this.resource('new',function() {
        this.route('a');
    });
*/	
});

export default Router;
