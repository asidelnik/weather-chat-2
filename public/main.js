// Importing classes modules Events, Data, & Render
// import Render from './render.js';
import Data from './data.js';
import Events from './events.js';
import WeatherAPI from './api.js';



let weatherAPI = new WeatherAPI()
let data = new Data(weatherAPI);;
let events = new Events(data);



events.fetchCity();




// $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function (
//       data) {
//       console.log(data);
//       $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp +
//          "°C");
//    });