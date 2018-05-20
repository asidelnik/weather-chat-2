import City from './city.js';

class Data {
   constructor() {
      this.tempReports = [1,2];
   }

   addCity(city, cityTemp, tempDescription) {
      let cityData = new City(city, cityTemp, tempDescription);
      this.tempReports.push(cityData);
      // $('#temp').html("Temperature in " + city + " is " + temp + "°C");
   }
}

export default Data;








// let cityTemp = {
   //    city: city,
   //    temp: temp
   // };