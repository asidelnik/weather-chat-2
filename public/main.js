// Importing classes modules Events, Data, & Render
// import Events from './events.js';
// import Data from './data.js';
// import Render from './render.js';


$(document).ready(function () {
   var city = "Bangalore";
   var searchtext =
      "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
      city + "') and u='c'"
   //change city variable dynamically as required
   $.get({
      url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json", // just a demo - place here your api details
      success: function (data) {
         console.log(data);
         $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp +
            "°C");
      }
   });
});




// $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function (
//       data) {
//       console.log(data);
//       $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp +
//          "°C");
//    });