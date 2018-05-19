class Events {
   constructor() {

   }

   fetchCity(weatherAPI) {
      $('#getTemp').on('click', function () {
         let city = $('#city').val();
         weatherAPI.getTemp(city)
            .then(function (data) {
               console.log(data);
            })
      })
   }
}

export default Events;

/* 
   1. Events module listen to city input value
   2. Sets a variable to its value
   3. Invokes the api's getTemp method
   4. Gets a promise
   5. Logs that promise


   $('#temp').html("Temperature in " + city + " is " + 
   data.query.results.channel.item.condition.temp + "°C");

*/