import DS from 'ember-data';

export default DS.Model.extend({
  say: DS.attr('string'),
  name: DS.attr('string'),
  
  img2: DS.attr('string')
});
