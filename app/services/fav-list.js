import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(question) {
    this.get('items').pushObject(question);
  }
});
