import Ember from 'ember';

export default Ember.Controller.extend({
	url:  'assets/images/a2.png',
	url1: 'assets/images/a2.png',
	url2: 'assets/images/a1.png',
	name: '',
	state: true,
	
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
		}		
	}
});
