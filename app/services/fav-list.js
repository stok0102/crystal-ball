import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(question) {
    if (this.items.includes(question)) {

    } else {
      this.get('items').pushObject(question);
    }
  },

  remove(question) {
    if (this.items.includes(question)) {
      this.get('items').removeObject(question);
    }
  }
});
