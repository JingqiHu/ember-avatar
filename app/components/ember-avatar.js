import Ember from 'ember';

export default Ember.Component.extend({
  address: '',
  name: '',
  size: '',
  mark: '✓',
  unmarked: true,
	
  avatarUrl: function() {
    var address = this.get('address');

    return  address;
  }.property('address'),
  
  firstLetter: function() {
	var name = this.get('name');
  
	return name[0];
  }.property('name'),
	
  click: function() {
	var marked = this.get('unmarked');
	this.set('unmarked',!marked);  
  },
  
});
