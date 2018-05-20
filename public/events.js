// import Data from './data.js';
//let dataRep = new Data(cityReport);

class Events {
   constructor(dataRep) {
      this.dataRep = dataRep;
   }

   // Evnent listener - gets city temp on search
   fetchCity(weatherAPI) {
      console.log(this.dataRep);
      $('#getTemp').on('click', function () {
         console.log(this.dataRep);
         let cityName = $('#city').val();
         // Executes api's getTemp method
         weatherAPI.getTemp(cityName)
            .then(function (data) { // When promise is returned, then these commands are preformed
               let cityTemp = data.query.results.channel.item.condition.temp;
               let tempDescription = data.query.results.channel.item.condition.text;
               this.dataRep.addCity(cityName, cityTemp, tempDescription);
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
   Maybe use something like this, in the main file. Brought it from the gym hackathon project

         var getTrainees = gymRepo.getTrainees();
         getTrainees.then(function(data) {
         traineesRenderer.renderTrainees(data)
         });

   

   Or this from David Chuwer spacebook
         var getPosts = postsRepository.getPosts();
         getPosts.then( () => {
         postsRenderer.renderPosts(postsRepository.posts)});

    
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