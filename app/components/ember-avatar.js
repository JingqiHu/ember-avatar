import Ember from 'ember';

export default Ember.Component.extend({
  address: '',
  name: '',

  avatarUrl: function() {
    var address = this.get('address');

    return  address;
  }.property('address'),
  
  firstLetter: function() {
	var name = this.get('name');
  
	return name[0];
  }.property('name'),
	
});
