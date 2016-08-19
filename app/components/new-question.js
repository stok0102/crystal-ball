import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
      };
      this.sendAction('save', params);
    }
  }
});
