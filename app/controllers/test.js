import Ember from 'ember';

export default Ember.Controller.extend({
	url:  'assets/images/a2.png',
	url1: 'assets/images/a2.png',
	url2: 'assets/images/a1.png',
	name1: 'Jeremy',
	store: '',
	empty: '',
	state: true,
	clean: true,
	
	actions: {
		selected: function() {
			this.set('state', false);
			var temp= this.get('url2');
			this.set('url',temp);
		},
		
		unselected: function() {
			this.set('state', true);
			var temp= this.get('url1');
			this.set('url',temp);
		},	

		clean: function() {
			this.set('clean', false);
			var current= this.get('url');
			this.set('store',current);
			var empty = this.get('empty');
			this.set('url',empty);
			//console.log('store:'+this.get('store'));
		},	
		
		get: function() {
			this.set('clean', true);
			var current= this.get('store');
			this.set('url',current);
			//console.log('Url:'+this.get('url'));
		},	
	},

});
