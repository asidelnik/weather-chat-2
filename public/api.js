class WeatherAPI {
   constructor() {}

   getTemp(cityName) {
      // var city = "Bangalore";
      var searchtext =
         "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
         city + "') and u='c'"
      //change city variable dynamically as required
      return $.ajax({
            method: 'GET',
            url: "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json", // just a demo - place here your api details
         })
         .catch(function (data) {
            console.log(data)
         })
   }
}
export default WeatherAPI;



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