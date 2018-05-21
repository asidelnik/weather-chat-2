class City {
   constructor(cityName, cityTemp, tempDescription) {
      this.cityName = cityName;
      this.cityTemp = cityTemp;
      this.tempDescription = tempDescription;
      this.comments = [];
      this.id = Date.now();
   }
}

export default City;