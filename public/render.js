class Render {
   constructor(dataRep) {
      this.$cities = $(".cities");
      this.$citiesTemplate = $('#cities-template').html();
      this.dataRep = dataRep;
      // this.$commentTemplate = $('#comment-template').html();
  }

  renderCities() {
      this.$cities.empty();
      let template = Handlebars.compile(this.$citiesTemplate);
      for (let i = 0; i < this.dataRep.tempReports.length; i++) {
        let newHTML = template(this.dataRep.tempReports[i]);
        this.$cities.append(newHTML);
        //this.renderComments(tempReports, i);
      }
  }
}
export default Render;