import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(question) {
    if (this.items.includes(question)) {
      
    } else {
      this.get('items').pushObject(question);
    }
  }
});
