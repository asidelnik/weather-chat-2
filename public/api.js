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
