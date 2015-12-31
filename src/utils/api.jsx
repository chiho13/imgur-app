var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com3/';
var apiKey = '2a0c5eba0dfe964';
// var apiKey = '430d6820d865788';

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      console.log(response);
  })
  }
};
