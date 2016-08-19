import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
        this.sendAction('destroyAnswer', answer);
      }
    }
});
