import Ember from 'ember';

export default Ember.Component.extend({
  favList: Ember.inject.service(),

  actions: {

    removeFromFaves(question) {
      this.get('favList').remove(question);
    }
  }
});
