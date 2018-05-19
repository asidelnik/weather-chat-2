class Events {
   constructor(data) {
      this.data = data;
   }

   fetchCity() {
      $('#getTemp').on('click', function() {
         let city = $('#city').val();
         console.log(city);
         this.data.showWeather2(city);

      })
   }
}

export default Events;