// All Kenny - Js file
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    findKenny() {
      let params = this.get('kenny');
      console.log('finding kenny')
      this.sendAction('findKenny', params);
    }
  }
});
