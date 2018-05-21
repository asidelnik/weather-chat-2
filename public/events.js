// import Data from './data.js';
//let dataRep = new Data(cityReport);

class Events {
   constructor(dataRep, render, weatherAPI) {
      this.dataRep = dataRep;
      this.render = render;
      this.weatherAPI = weatherAPI;
   }

   // Evnent listener - gets city temp on search
   fetchCity() {
      $('#getTemp').on('click', () => {
         let cityName = $('#city').val();
         // Executes api's getTemp method
         this.weatherAPI.getTemp(cityName)
            .then((data) => { // When promise is returned, then these commands are preformed
               this.dataRep.addCity(cityName, data);
               this.dataRep.saveToLocalStorage();
               this.dataRep.tempReports = this.dataRep.getFromLocalStorage();
               console.log(this.dataRep.tempReports);

               this.render.renderCities(); //this.dataRep.tempReports
               $('#searchInp').val("");
            })
            .catch(function (error) { //If the ajax promise returns an error, the catch will notify it
               console.log(error.data)
            })
      })
   }




   showComments() {
      $('.toggle-comments').on('click', function () {
         $('.comments-container').toggleClass('show');
      })
   }

   onLoadRender() {
      this.dataRep.tempReports = this.dataRep.getFromLocalStorage();
      this.render.renderCities(this.dataRep.tempReports);
   }
}



export default Events;


/*
   this. in a promise is the this. that called the .then (function) - the weatherAPI

   2 solutions:
      1. Use arrow function in the .then - it keeps the original this. that called the promise - original class/object this
      2. bind this (less good)
*/