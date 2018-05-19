class WeatherAPI {
   constructor() {}

   // returns the ajax promise to executer - events.fetchCity
   getTemp(city) {
      // Ajax url search query
      var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
      // returns a promise of weather api ajax get method
      return $.ajax({
         method: 'GET',
         url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json",
      })
   }
}
export default WeatherAPI;


// url: "https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + cityName + "') and u='c'&format=json"
//url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json", // just a demo - place here your api details
// var city = "Bangalore";
//var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"

// showWeather(city) {
//    // var city = "Bangalore";
//    var searchtext =
//       "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
//       city + "') and u='c'"
//    //change city variable dynamically as required
//    $.get({
//       url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json", // just a demo - place here your api details
//       success: function (data) {
//          console.log(data);
//          $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp +
//             "°C");
//       }
//    });
// }