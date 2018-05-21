class Render {
   constructor() {
      this.$cities = $(".cities");
      this.$citiesTemplate = $('#cities-template').html();
      // this.$commentTemplate = $('#comment-template').html();
  }

  renderCities(tempReports) {
      this.$cities.empty();
      let template = Handlebars.compile(this.$citiesTemplate);
      for (let i = 0; i < tempReports.length; i++) {
        let newHTML = template(tempReports[i]);
        this.$cities.append(newHTML);
        //this.renderComments(tempReports, i);
      }
  }
}
export default Render;