import Ember from 'ember';

export default Ember.Component.extend({
  favList: Ember.inject.service(),

  answerCount: Ember.computed('question.answers', function() {
    var answerArray = this.get('question.answers.length');
    return answerArray;
  }),

  actions: {
    update(model, params) {
      this.sendAction('update', model, params);
    },

    delete(model) {
      if (confirm('Would you like to remove this question?')) {
        this.sendAction('destroyQuestion', model);
      }
    },

    addToFaves(model) {
      this.get('favList').add(model);
      console.log(this.favList.items);
    }
  }
});
