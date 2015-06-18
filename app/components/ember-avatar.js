import Ember from 'ember';

export default Ember.Component.extend({
  address: '',

  avatarUrl: function() {
    var address = this.get('address');

    return  address;
  }.property('address')
	
});
