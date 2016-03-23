var axios = require('axios');

// function getCurrentWeather(city) {
//   return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&type=accurate&0fe4e2b61b814cc0158ee3c6ab1a14c9')
// }
//
// function get5DayForecast(city) {
//   return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&type=accurate&APPID=0fe4e2b61b814cc0158ee3c6ab1a14c9&cnt=5');
// }

var fetchWeathers = {
  getCurrentWeather: function(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&type=accurate&APPID=0fe4e2b61b814cc0158ee3c6ab1a14c9')
    .then(function(data) {
      return data.data;
    });
  },

  get5DayForecast: function(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&type=accurate&APPID=0fe4e2b61b814cc0158ee3c6ab1a14c9&cnt=5')
    .then(function(data) {
      return data.data;
    });
  }
}

module.exports = fetchWeathers;
