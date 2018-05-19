// Importing classes modules Events, Data, & Render
import WeatherAPI from './api.js';
import Data from './data.js';
import Render from './render.js';
import Events from './events.js';
import City from './city.js';



let weatherAPI = new WeatherAPI();
let city = new City();
let dataRep = new Data();
let render = new Render();
let events = new Events(dataRep);



events.fetchCity(weatherAPI);




// $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function (
//       data) {
//       console.log(data);
//       $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp +
//          "°C");
//    });