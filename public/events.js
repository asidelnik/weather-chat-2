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
               dataRep.saveToLocalStorage();
               dataRep.tempReports = dataRep.getFromLocalStorage();
               console.log(dataRep.tempReports);

               render.renderCities(dataRep.tempReports);
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

   onLoadRender(dataRep, render) {
      dataRep.tempReports = dataRep.getFromLocalStorage();
      render.renderCities(dataRep.tempReports);
   }
}



export default Events;