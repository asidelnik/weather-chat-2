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
      console.log(this.tempReports); 
   }
}

export default Data;







// let cityTemp = {
   //    city: city,
   //    temp: temp
   // };

         // $('#temp').html("Temperature in " + city + " is " + temp + "°C");
