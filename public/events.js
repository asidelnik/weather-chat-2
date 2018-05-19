class Events {
   constructor(dataRep) {
      this.dataRep = dataRep;
   }

   // Evnent listener - gets city temp on search
   fetchCity(weatherAPI) {
      $('#getTemp').on('click', function () {
         let city = $('#city').val();
         // Executes api's getTemp method
         weatherAPI.getTemp(city)
            .then(function (data) { // When promise is returned, then these commands are preformed
               let cityTemp = data.query.results.channel.item.condition.temp;
               let tempDescription = data.query.results.channel.item.condition.text;
               // console.log("Temperature in " + city + " is " + temp + "°C");
               this.dataRep.addCity(city, cityTemp, tempDescription);
               // console.log(this.dataRep.dataArr);
               $('#city').empty();
            })
            .catch(function (error) { //If the ajax promise returns an error, the catch will notify it
               console.log(error.data)
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