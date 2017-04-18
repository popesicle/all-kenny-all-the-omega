// Index Js
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    findKenny(params) {
      this.transitionTo('kennys', params)
    }
  }
});
