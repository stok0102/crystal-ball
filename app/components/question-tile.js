import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(model, params) {
      this.sendAction('update', model, params);
    },
    delete(model) {
      if (confirm('Would you like to remove this question?')) {
        this.sendAction('destroyQuestion', model);
      }
    }
  }
});
