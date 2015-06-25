import Ember from 'ember';

export default Ember.Component.extend({
  address: '',
  name: '',
  size: '128px',
  mark: '✓',
  unmarked: true,
  toggle: 'flip-container',
  toggle1: 'flip-container',
  toggle2: 'flip-container click',
  
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
	if (marked){
		var toggle = this.get('toggle2');
		this.set('toggle',toggle);
		//console.log(toggle);
	}
	else {
		var toggle = this.get('toggle1');
		this.set('toggle',toggle);
		//console.log(toggle);
	}
	this.set('unmarked',!marked); 	
  },
  
  didInsertElement: function() {
	  var size = this.get('size');
	  this.$().height(size);
	  this.$().width(size);
  },
  
});
