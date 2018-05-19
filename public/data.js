class Data {
   constructor(weatherAPI) {
      this.weatherAPI = weatherAPI;
   }

   showWeather2(city) {
      this.showWeather(city);
   }
}

export default Data;