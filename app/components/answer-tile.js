import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm("Delete Answer?")) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
