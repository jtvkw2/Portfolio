var modal = document.getElementById('myModal');
var span = document.getElementsByClassName(".close");

function closeModal(){
  modal.style.display = "none";
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }

}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
      }
    }
}

function finalPopup(popup){
  var projects = ["memory", "arcade", "pixel", "feed", "map"];
  console.log(projects[popup]);
  var elem = $("<div class=\'innerModal\' data-bind=\"template: { name: \'modal\', data: "+projects[popup]+"}\"></div>");
  $("#myModal").append(elem);
  modal.style.display = "block";
}

function MyViewModel() {
         this.memory = { name: 'Memory', url: ko.observable("https://github.com/jtvkw2/Memory"), src: ko.observable("img/Memory.png"), des: "Built a complete browser-based card matching game (also known as Concentration). But this isn’t just any memory game! It’s a shnazzy, well-designed, feature-packed memory game!"};
         this.arcade = { name: 'Bug Boy in Water World', url: ko.observable("https://github.com/jtvkw2/Bug_Boy_in_Water_World"), src: ko.observable("img/Arcade.png"), des: "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript."};
         this.pixel = { name: 'Pixel Maker', url: ko.observable("https://github.com/jtvkw2/Pixel"), src: ko.observable("img/Pixel.png"), des: "Created a single-page app in JavaScript where the user can create artistic designs!" };
         this.feed = { name: 'Feed Reader', url: ko.observable("https://github.com/jtvkw2/Feed-Reader"), src: ko.observable("img/Feed.png"), des: "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API." };
         this.map = { name: 'Google Maps Demo', url: ko.observable("https://github.com/jtvkw2/Map"), src: ko.observable("img/Map.png"), des: "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs." };
}
ko.applyBindings(new MyViewModel());
