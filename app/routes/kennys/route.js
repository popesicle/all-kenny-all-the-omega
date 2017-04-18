// Kennys JS file
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params)
    let url = "http://api.giphy.com/v1/gifs/search?q=kenny+omega+" + params.params + "&api_key=dc6zaTOxFJmzC";
    console.log(url);
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.data);
      return responseJSON.data;
    });
  }
});
