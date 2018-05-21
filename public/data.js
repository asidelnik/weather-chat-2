import City from './city.js';

class Data {
   constructor(cityReport) {
      this.tempReports = [];
      // this.cityReport = cityReport;
   }

   addCity(cityName, data) {
      let cityTemp = data.query.results.channel.item.condition.temp;
      let tempDescription = data.query.results.channel.item.condition.text;
      let cityData = new City(cityName, cityTemp, tempDescription);
      this.tempReports.push(cityData);
   }




   saveToLocalStorage() {
      localStorage.setItem('weather-chat', JSON.stringify(this.tempReports));
   }

   getFromLocalStorage() {
      return JSON.parse(localStorage.getItem('weather-chat') || '[]');
   }
}

export default Data;


// _findPostById(cities, id) {
//    for (let i = 0; i < cities.length; i++) {
//       if (cities[i].id == id) {
//          return i;
//       }
//    }
// }