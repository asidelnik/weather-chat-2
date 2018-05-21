// Importing classes modules Events, Data, & Render
import WeatherAPI from './api.js';
import Data from './data.js';
import Render from './render.js';
import Events from './events.js';
import City from './city.js';



let weatherAPI = new WeatherAPI();
let cityReport = new City();
let dataRep = new Data();
let render = new Render(dataRep);
let events = new Events(dataRep, render, weatherAPI);


events.onLoadRender();
events.fetchCity();
events.showComments();