import Ember from 'ember';

export default Ember.Component.extend({
  address: '',
  name: '',
  size: '',
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
	// select click area
	this.$().height(size);
	this.$().width(size);
	// select front & back size	  
	this.$('.front, .back ').height(size);
	this.$('.front, .back ').width(size);
	var length = (size).length;
	console.log(length);
	// string to integer
	if(length > 1){
		var string = size.substring(0, length-2);
	}
	console.log(string);
	// Letter size setting
	var num = 0.8*string;
	console.log(num);
	// integer to string
	var letter = num + 'px';
	console.log(letter);
	this.$('.front, .back').css('font-size',letter);
  },
  
});
