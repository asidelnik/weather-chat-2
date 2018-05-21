// import Data from './data.js';
//let dataRep = new Data(cityReport);

class Events {
   constructor(weatherAPI) {
      //this.dataRep = dataRep;
      // this.render = render;
      this.weatherAPI = weatherAPI;  
   }

   // Evnent listener - gets city temp on search
   fetchCity(dataRep, render) {      
      $('#getTemp').on('click', () => {
         let cityName = $('#city').val();
         // Executes api's getTemp method
         this.weatherAPI.getTemp(cityName)
            .then(function (data) { // When promise is returned, then these commands are preformed
               dataRep.addCity(cityName, data);
               render.renderCity(dataRep.tempReports);
            })
            .catch(function (error) { //If the ajax promise returns an error, the catch will notify it
               console.log(error.data)
            })
      })
   }
}



export default Events;

/*
   $("#city").on('keyup', function(event) {
         if (event.keyCode == 13) {
             $("#getTemp").trigger('click');
         } else {
             event.preventDefault();
             return false;
         }
     });
*/


/* 
   1. Events module listen to city input value
   2. Sets a variable to its value
   3. Invokes the api's getTemp method
   4. Gets a promise
   5. Logs that promise

   $('#temp').html("Temperature in " + city + " is " + 
               data.query.results.channel.item.condition.temp + "°C");

   

*/


/* 
log() {
   // let x = this.dataRep;
   // console.log("this.dataRep at log method" + x);
   // console.log(x);
   console.log(this.dataRep);
}
*/

 // .then(function (cityName, cityTemp, tempDescription) {
            //    this.dataRep.addCity(cityName, cityTemp, tempDescription);
               
            //    //$('#city').empty();
            // })