class Data {
   constructor() {
      this.dataArr = [];
   }

   addCity(city, cityTemp, tempDescription) {
      let cityData = new City(city, cityTemp, tempDescription);
      this.dataArr.push(cityData);
      // $('#temp').html("Temperature in " + city + " is " + temp + "°C");
   }
}

export default Data;








// let cityTemp = {
   //    city: city,
   //    temp: temp
   // };