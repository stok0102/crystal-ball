import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        username: this.get('username'),
        answerContent: this.get('answerContent'),
        question: this.get('question'),
      };
      this.sendAction('save', params);
    }
  }
});
